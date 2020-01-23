import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.css'
import FirstBlock from '../../components/FirstBlock'
import results from '../../static/results-min.webp'
import QuestionsItem from '../../components/QuestionsItem'
import doFetch from '../../utils/doFetch'
import { useAuth0 } from '../../react-auth0-spa'
import Spinner from '../../components/Spinner'

export default function Results ({ match }) {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useAuth0()
  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const result = await doFetch(token, 'GET', `results/${match.params.resultId}`)

          if (result.success) {
            setResult(result.result)
            setIsLoading(false)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [token])

  if (isLoading) {
    return <Spinner />
  }

  const { pts, test } = result

  const ratio = pts / (test.numberOfOptions / 100)

  return (
    <div className={style.container}>
      <FirstBlock image={results} title='Your Test Results' color='rgb(66, 72, 74)'/>
      <div className={style.container__question}>
        {result.validatedSelections.map(selection => (
          <QuestionsItem 
            content={selection.content}
            options={selection.options} 
            doValidate 
        />
        ))}
      </div>
      <div className={style.testResults}>
        <div
          className={style.testResults__correct}
          style={{ color: `${ratio >= 70 ? 'green' : ratio >= 65 ? 'yellow' : 'red'}` }}
        >
          {pts}
        </div>
        <div className={style.testResults__number}>/</div>
        <div className={style.testResults__number}>
          {test.numberOfOptions}
        </div>
      </div>
    </div>
  )
}
