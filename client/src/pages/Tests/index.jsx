import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import TestsOfThemeItem from '../../components/TestsOfThemeItem'
import Search from '../../components/Search'

// import { Link } from 'react-router-dom'
import Flip from 'react-reveal/Flip'
function Tests ({ match }) {
  const [tests, setTests] = useState([])
  const [testsToDisplay, setTestsToDisplay] = useState([])

  const filterTests = searchString => setTestsToDisplay(searchString ? tests.filter(test => test.title.includes(searchString)) : tests)
  return (
    <div className={style.container}>
      <div className={style.container__title}><Flip left >
        {match.params.themeName ? `Tests by theme '${match.params.themeName}'` : 'All tests'}
      </Flip></div>
      <Search onChange={filterTests}/>
      <div className={style.themes}>
        <TestsOfThemeItem name='nameOfTest'/>
      </div>
    </div>
  )
}
export default withRouter(Tests)
