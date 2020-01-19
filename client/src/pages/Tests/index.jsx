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
  const { token } = useAuth0()

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const data = await doFetch(token, 'GET', 'tests')

          console.log(data)

          if (data.success) {
            console.log(data.tests)
            setTests(data.tests)
            setTestsToDisplay(data.tests)
          }
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [token])

  const filterTests = searchString => setTestsToDisplay(searchString ? tests.filter(test => test.title.includes(searchString)) : tests)

  return (
    <div className={style.container}>
      <div className={style.container__title}><Flip left >
        {match.params.themeName ? `Tests by theme '${match.params.themeName}'` : 'All tests'}
      </Flip></div>
      <Search onChange={filterTests}/>
      <div className={style.themes}>
        {testsToDisplay.map(({ _id, title, questions }) => (
          <TestsOfThemeItem key={_id} _id={_id} title={title} length={questions.length}/>
        ))}

      </div>
    </div>
  )
}
export default withRouter(Tests)
