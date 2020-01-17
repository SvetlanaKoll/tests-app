import React from 'react'
import style from './index.module.css'
import Checkbox from '../Checkbox'
export default function Question () {
  return (
    <div className={style.box}>
      <div className={style.box__question}>What will you do in this case?</div>
      <Checkbox id='1' label='First'/>
      <Checkbox id='2' label='Second'/>
      <Checkbox id='3' label='Third'/>

    </div>
  )
}
