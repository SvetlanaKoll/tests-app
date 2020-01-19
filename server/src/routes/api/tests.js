import { Router } from 'express'
import { checkJwt } from '../../utils'
import jwtAuthz from 'express-jwt-authz'
import Test from '../../models/Test'
import Topic from '../../models/Topic'

const router = new Router()

// @route GET /api/test
// @desc Get all tests
router.get('/', checkJwt, jwtAuthz(['read:tests']), async (req, res) => {
  try {
    const tests = await Test.find()

    const filteredTests = tests.map(({ _id, title, questions, timeLimit }) => ({
      _id,
      title,
      timeLimit,
      questions: questions.withNoAnswers
    }))

    res.json({
      success: true,
      tests: filteredTests
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route GET /api/test/:id
// @desc Get specific test
router.get('/:id', checkJwt, jwtAuthz(['read:tests']), async (req, res) => {
  try {
    const test = await Test.findById(req.params.id)

    if (!test) {
      res.status(400).send({
        success: false,
        message: 'No such test found'
      })
    }

    res.json({
      success: true,
      test: {
        title: test.title,
        topic: test.topic,
        timeLimit: test.timeLimit,
        questions: test.questions.withNoAnswers
      }
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route POST /api/test/new
// @desc Create new test
router.post('/new', checkJwt, jwtAuthz(['create:tests']), async (req, res) => {
  try {
    const topic = await Topic.findById(req.body.topicId)

    if (!topic) {
      return res.status(400).send({
        success: false,
        message: 'No such topic found'
      })
    }

    const { questions, title, timeLimit } = req.body

    const answers = questions.map(({ options, id }) => ({
      itemId: id,
      options: options.map(({ isCorrect, id: optId }) => ({ isCorrect, optId }))
    }))

    const questionsWithNoAnswers = questions.map(({ options, id: itemId, content }) => ({
      content,
      itemId,
      options: options.map(({ content, id: optId }) => ({ content, optId }))
    }))

    const newTest = new Test({
      title,
      topic,
      timeLimit: timeLimit * 1000,
      questions: {
        withNoAnswers: questionsWithNoAnswers,
        answers
      }
    })

    const test = await newTest.save()

    res.json({
      success: true,
      test
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route PUT /api/test/:id
// @desc Update test
router.put('/update/:id', checkJwt, jwtAuthz(['update:tests']), async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(req.params.id, req.body)

    res.json({
      success: true,
      updatedTest
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route DELETE /api/test/:id
// @desc Delete test
router.delete('/delete/:id', checkJwt, jwtAuthz(['delete:tests']), async (req, res) => {
  try {
    await Test.findOneAndRemove(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route POST /api/tests/pass/:id
// @desc Update test
router.post('/pass/:id', checkJwt, async (req, res) => {
  try {
    const testToPass = await Test.findById(req.params.id)

    if (!testToPass) {
      return res.status(400).send({
        success: false,
        message: 'No such test found'
      })
    }

    const { selections } = req.body
    const { answers } = testToPass.questions

    // const pts = selections.reduce((selectAcc, currSelect) =>
    //   selectAcc + currSelect.options.reduce((optAcc, currOpt) => optAcc +  (answers.find(({ itemId: answerId }) =>
    //       answerId === currSelect.itemId).options.find(({ optId }) =>
    //       optId === currOpt.optId))

    //     // console.log(opt.isCorrect === currOpt.isChecked ? 1 : 0)

    //     return optAcc + (opt.isCorrect === currOpt.isChecked ? 1 : 0)
    //   }, 0)
    // , 0)

    // console.log(pts)

    res.json({
      success: true,
      updatedTest
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

export default router
