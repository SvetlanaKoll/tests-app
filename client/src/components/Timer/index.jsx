import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import Countdown from 'react-countdown-now'

export default function Timer ({ timeLimit }) {
  // window.setInterval(() => {
  //   setTimeLeft(timeLeft - 1)
  // }, 1)

  return (
    <div className={style.box}>
      <div className={style.time}>
        <Countdown date={Date.now() + timeLimit}>
          <span>Time is up</span>
        </Countdown>
      </div>
      {/* <div className={style.time}>:</div>
      <div className={style.time}>00</div> */}
    </div>
  )
}
