import { Router } from 'express'
import { checkJwt } from '../../utils'
import jwtAuthz from 'express-jwt-authz'
import Test from '../../models/Test'

const router = new Router()

// @route GET /api/test
// @desc Get all tests
router.get('/', checkJwt, jwtAuthz(['read:tests']), async (req, res) => {
  console.log(req.user)
  try {
    const tests = await Test.find()
    res.json({
      sucess: true,
      tests
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
      test
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
  const newTest = new Test(req.body)

  try {
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

// @route POST /api/test/pass/:id/
// @desc Pass test
router.delete('/pass/:id', checkJwt, jwtAuthz(['create:answerlists']), async (req, res) => {
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

export default router
