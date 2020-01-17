import React from 'react'
import style from './index.module.css'
import Checkbox from '../Checkbox'
export default function QuestionsItem () {
  return (
    <div className={style.box}>
      <div className={style.box__question}>What will you do in this case?</div>
      <Checkbox correctColor='green' falseColor='red' id='1' label='First'/>
      <Checkbox correctColor='green' falseColor='red' id='2' label='Second'/>
      <Checkbox correctColor='green' falseColor='red' id='3' label='Third'/>

    </div>
  )
}
