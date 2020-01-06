import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Flip from 'react-reveal/Flip'
import style from './index.module.css'
import QuestionsItem from '../../components/QuestionsItem'
import sea from '../../static/sea-book.jpg'
import FirstBlock from '../../components/FirstBlock'
function Questions({ history }) {
  const passTest = () => {
    console.log(123)
  }

  // useEffect(() => {
  //   if (!window.confirm('Are you ready to pass the test?')) {
  //     history.push('/tests')
  //   } else {
  //     setTimeout(() => {
  //       passTest()
  //       history.push('/tests')
  //     }, 1000)
  //   }
  // }, [])

  return (
    <div className={style.container}>
      
      <FirstBlock image={sea} title='Questions' color='rgb(66, 72, 74)'/>
    <div className={style.container__question}>
      <QuestionsItem />
      <QuestionsItem />
      <QuestionsItem />
      <QuestionsItem />
    </div>
  </div>
  )
}
export default withRouter(Questions)