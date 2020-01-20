import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import Countdown from 'react-countdown'

const addZero = number => number < 10 ? `0${number}` : `${number}`

// Random component
const Completionist = () => <span>Time is up!</span>

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return <span>{addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}</span>
  }
}

export default function Timer ({ timeLimit }) {
  // window.setInterval(() => {
  //   setTimeLeft(timeLeft - 1)
  // }, 1)

  return (
    <div className={style.box}>
      <div className={style.time}>
        <Countdown
          date={Date.now() + timeLimit}
          renderer={renderer}
        />
      </div>
      {/* <div className={style.time}>:</div>
      <div className={style.time}>00</div> */}
    </div>
  )
}
