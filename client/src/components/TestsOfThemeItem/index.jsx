import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function TestsOfThemeItem (props) {
  return (
    <div className={style.box}>
<div className={style.box__title}>{props.title}</div>
      {/* <div className={style.box__desc}>Here you could discover a lot of different signs of pregnancy, check your condition, find correct answers on your questions</div> */}
      <div className={style.box__q}>Quantity of questions: {props.length}</div>
      <Link to={`/tests/${props._id}`}><button className={style.box__btn}>Go to this test!</button></Link>
    </div>
  )
}
