import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import TestsOfThemeItem from '../../components/TestsOfThemeItem'
import Search from '../../components/Search'
import doFetch from '../../utils/doFetch'
import { useAuth0 } from '../../react-auth0-spa'

// import { Link } from 'react-router-dom'
import Flip from 'react-reveal/Flip'

function Tests ({ match }) {
  const [testsToDisplay, setTestsToDisplay] = useState([])
  const [tests, setTests] = useState([])
  const [sortBy, setSortBy] = useState('0')
  const { token } = useAuth0()

  useEffect(() => {
    if (testsToDisplay) {
      console.log(testsToDisplay)
    }
  }, [testsToDisplay]) 

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const data = await doFetch(token, 'GET', 'tests')

          if (data.success) {
            setTests(match.params.topicId ? data.tests.filter(test => test.topic._id === match.params.topicId) : data.tests)
            console.log(data.tests)
          }
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [token])

  useEffect(() => {
    switch (sortBy) {
      case '0': {
        setTestsToDisplay(tests)
        break
      }
      case '1': {
        setTestsToDisplay(tests.sort((a, b) => a.questions.length - b.questions.length))
        break
      }
      case '2': {
        setTestsToDisplay(tests.sort((a,b) => a.timesPassed - b.timesPassed))
        break
      }
      case '3': {
        setTestsToDisplay(tests.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
        break
      } 
      default: {
        setTestsToDisplay(tests)
        break
      }
    }
  }, [sortBy])

  useEffect(() => {
    setTestsToDisplay(tests)
  }, [tests])

  const filterTests = searchString => 
    setTestsToDisplay(searchString ? 
      tests.filter(test => test.title.includes(searchString)) 
      : tests
    )

  // const onSelectChange = e => {
  //   if (tests && testsToDisplay) {
  //     switch (e.target.value) {
  //       case '1': {
  //         setTestsToDisplay(tests.sort((a, b) => a.questions.length - b.questions.length))
  //         break
  //       }
  //       case '2': {
  //         console.log(tests.sort((a,b) => a.timesPassed - b.timesPassed))
  //         setTestsToDisplay(tests.sort((a,b) => a.timesPassed - b.timesPassed))
  //         break
  //       }
  //       case '3': {
  //         setTestsToDisplay(tests.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
  //         break
  //       } 
  //       default: {
  //         setTestsToDisplay(tests)
  //         break
  //       }
  //     }
  //   }
  // }

  return (
    <div className={style.container}>
      <div className={style.container__title}>
        <Flip left >
          {match.params.themeName ? `Tests by theme '${match.params.themeName}'` : 'All tests'}
        </Flip>
      </div>
      <Search
        onInputChange={e => filterTests(e.target.value)}
        onSelectChange={e => setSortBy(e.target.value)}
      />
      <div className={style.themes}>
        {testsToDisplay.map(({ _id, title, questions }) => (
          <TestsOfThemeItem key={_id} _id={_id} title={title} length={questions.length}/>
        ))}
      </div>
    </div>
  )
}
export default withRouter(Tests)
