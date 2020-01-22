import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.css'
import FirstBlock from '../../components/FirstBlock'
import results from '../../static/results-min.webp'
import QuestionsItem from '../../components/QuestionsItem'
export default function Results () {
  return (
    <div className={style.container}>

      <FirstBlock image={results} title='Your Test Results' color='rgb(66, 72, 74)'/>

      <div className={style.container__question}>
        <QuestionsItem />
      </div>
      <div className={style.testResults}>
        <div className={style.testResults__correct}>20</div>
        <div className={style.testResults__number}>/</div>
        <div className={style.testResults__number}>00</div>
      </div>
    </div>
  )
}
