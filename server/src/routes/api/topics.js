import { Router } from 'express'
import { checkJwt } from '../../utils'
// import jwtAuthz from 'express-jwt-authz'
import Topic from '../../models/Topic'

const router = new Router()

// @route GET /api/topics
// @desc Get all tests
router.get('/', checkJwt, async (req, res) => {
  try {
    const topics = await Topic.find()

    res.json({
      success: true,
      topics
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

// @route POST /api/topics/new
// @desc New Topic
router.post('/new', checkJwt, async (req, res) => {
  const newTopic = new Topic(req.body)

  try {
    const topic = await newTopic.save()

    res.json({
      success: true,
      topic
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }
})

export default router
