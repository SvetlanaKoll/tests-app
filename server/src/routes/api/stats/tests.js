import { Router } from 'express'
import Test from '../../../models/Test'
import randomColor from 'randomcolor'

const router = new Router()

router.get('/popular', async (req, res) => {
  try {
    const tests = await Test.find()

    const labels = tests.map(test => test.title)
    const data = tests.map(test => test.timesPassed)
    const colors = tests.map(() => randomColor({ format: 'rgba', luminosity: 'light' }))

    res.json({
      success: true,
      data: {
        labels,
        datasets: [{
          label: 'Times passed',
          data,
          backgroundColor: colors,
          bprderColor: colors
        }]
      }
    })
  } catch (err) {
    res.json({
      success: false,
      message: err
    })
  }
})

export default router
