import React from 'react'
import style from './index.module.css'
export default function ThemeItem() {
  return (
    <div className={style.box}>
      <div className={style.box__title}>Pregnancy</div>
      <div className={style.box__desc}>Here you could discover a lot of different signs of pregnancy, check your condition, find correct answers on your questions</div>
      <div className={style.box__q}>Quantity of tests: 4</div>
    <button className={style.box__btn}>Go to this theme!</button>
    </div>
  )
}
