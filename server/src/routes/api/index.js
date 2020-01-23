import { Router } from 'express'
import tests from './tests'
import results from './results'
import topics from './topics'
import stats from './stats'

const router = new Router()

router.use('/tests', tests)
router.use('/topics', topics)
router.use('/results', results)
router.use('/stats', stats)

export default router
