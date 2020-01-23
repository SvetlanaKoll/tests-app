import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function ThemeItem (props) {
  return (
    <div className={style.box}>
      <div className={style.box__title}>{props.title}</div>
      <div className={style.box__desc}>{props.description}</div>
      <div className={style.box__q}>Quantity of tests: ?</div>
      <Link to={'/tests'}><button className={style.box__btn}>Go to this theme!</button></Link>
    </div>
  )
}
