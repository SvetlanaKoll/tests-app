import { Router } from 'express'
import { checkJwt } from '../../utils'
import jwtAuthz from 'express-jwt-authz'
import Result from '../../models/Result'
import Test from '../../models/Test'

const router = new Router()

// @route GET /api/answerList
// @desc Get all results
router.get('/', checkJwt, jwtAuthz(['read:results']), async (req, res) => {
  try {
    const results = await Result.find()

    res.json({
      success: true,
      results
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route GET /api/answerList/:id
// @desc Get specific answerList
router.get('/:id', checkJwt, async (req, res) => {
  try {
    const result = await Result.findById(req.params.id)

    console.log(result)

    if (!result) {
      res.status(400).send({
        success: false,
        message: 'No such test found'
      })
    }

    res.json({
      success: true,
      result
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route POST /api/answerList/new
// @desc Create new answerList
router.post('/new', checkJwt, jwtAuthz(['create:results']), async (req, res) => {
  console.log(req.body)
  if (!req.body.questionerId) {
    return res.status(400).send({
      success: false,
      message: 'Test ID is required!'
    })
  }

  const test = await Test.findById(req.body.questionerId)

  if (!test) {
    return res.status(400).send({
      success: false,
      message: 'No such test found!'
    })
  }

  if (test.questions.length !== req.body.answers.length) {
    return res.status(400).send({
      success: false,
      message: 'The amount of answers is not correct!'
    })
  }

  const newAnswerList = new Result({
    ...req.body,
    test
  })

  try {
    const answerList = await newAnswerList.save()
    res.json({
      success: true,
      answerList
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route DELETE /api/answerList/:id
// @desc Delete answerList
router.delete('/delete/:id', checkJwt, jwtAuthz(['delete:results']), async (req, res) => {
  try {
    await Result.findOneAndRemove(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

export default router
