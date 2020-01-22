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
import Spinner from '../../components/Spinner'
function Questions ({ history, match }) {
  const [test, setTest] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [userSelections, setUserSelections] = useState([])

  const { token } = useAuth0()
  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const result = await doFetch(token, 'GET', `tests/${match.params.testId}`)

          if (result.success) {
            console.log(result.test)
            setTest(result.test)
            setUserSelections(result.test.questions.map(({ itemId, options }) => ({ itemId, options: options.map(({ optId }) => ({ optId, isChecked: false })) })))
            setIsLoading(false)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [token])

  useEffect(() => {
    console.log(userSelections)
  }, [userSelections])

  // const passTest = () => {
  //   console.log(123)
  // }

  useEffect(() => {
    if (test.timeLimit) {
      if (!window.confirm('Are you ready to pass the test?')) {
        history.push('/tests')
      } else {
        setTimeout(() => {
          sendTest()
        }, test.timeLimit)
      }
    }
  }, [test])

  const sendTest = async () => {
    if (token) {
      const result = await doFetch(token, 'POST', `tests/pass/${match.params.testId}`, {
        selections: userSelections
      })

      if (result.success) {
        alert('You successfully passed the test!')
        history.push(`/results/${result._id}`)
      }
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className={style.container}>

      <FirstBlock image={sea} title='Questions' color='rgb(66, 72, 74)'/>
      <Timer timeLimit={test.timeLimit}/>
      <div className={style.container__question}>
        {test.questions.map(question => (
          <QuestionsItem
            key={question.itemId}
            itemId={question.itemId}
            options={question.options}
            content={question.content}
            userSelections={userSelections}
            setUserSelections={setUserSelections}
          />
        ))}

      </div>
      <button
        className='btn btn-md btn-primary m-0 px-3'
        type='button'
        onClick={() => sendTest()}
      >
        Finish
      </button>
    </div>
  )
}
export default withRouter(Questions)
