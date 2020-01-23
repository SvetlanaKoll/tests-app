import { Router } from 'express'
import tests from './tests'

const router = new Router()

router.use('/tests', tests)

export default router
