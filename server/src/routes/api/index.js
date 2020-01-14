import { Router } from 'express'
import tests from './tests'
import answerlists from './answerLists'

const router = new Router()

router.use('/tests', tests)
router.use('/answerLists', answerlists)

export default router
