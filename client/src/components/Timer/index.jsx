import React from 'react'
import style from './index.module.css'

export default function Timer() {
  return (
    <div className={style.box}>
      <div className={style.time}>20</div>
      <div className={style.time}>:</div>
      <div className={style.time}>00</div>
    </div>
  )
}
