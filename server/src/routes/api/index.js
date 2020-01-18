import { Router } from 'express'
import tests from './tests'
import results from './results'
import topics from './topics'

const router = new Router()

router.use('/tests', tests)
router.use('/results', results)
router.use('/topics', topics)

export default router
