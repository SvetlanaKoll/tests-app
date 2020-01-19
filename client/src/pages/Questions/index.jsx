import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.css'
import QuestionsItem from '../../components/QuestionsItem'
import sea from '../../static/sea-book.jpg'
import FirstBlock from '../../components/FirstBlock'
import Timer from '../../components/Timer'
import Results from '../Results'
import { useAuth0 } from '../../react-auth0-spa'
import doFetch from '../../utils/doFetch'
import Tests from '../Tests'
function Questions ({ history, match }) {
  const [test, setTest] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useAuth0()
  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const result = await doFetch(token, 'GET', `tests/${match.params.testId}`)

          if (result.success) {
            console.log(result.test)
            setTest(result.test)
            setIsLoading(false)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [token])

  // const passTest = () => {
  //   console.log(123)
  // }

  useEffect(() => {
    if (test.timeLimit) {
      if (!window.confirm('Are you ready to pass the test?')) {
        history.push('/tests')
      } else {
        setTimeout(() => {
          // passTest()
          history.push('/tests')
        }, test.timeLimit)
      }
    }
  }, [test])

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div className={style.container}>

      <FirstBlock image={sea} title='Questions' color='rgb(66, 72, 74)'/>
      <Timer timeLimit={test.timeLimit}/>
      <div className={style.container__question}>
        <QuestionsItem />
      </div>
      <button
        className='btn btn-md btn-primary m-0 px-3'
        type='button'

      >
            Finish
      </button>
    </div>
  )
}
export default withRouter(Questions)
