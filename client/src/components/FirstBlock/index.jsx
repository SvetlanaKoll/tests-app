import React from 'react'
import style from './index.module.css'
import Flip from 'react-reveal/Flip'

export default function FirstBlock (props) {
  return (
    <div style={{ backgroundImage: `url(${props.image})`, color: `${props.color}` }} className={style.container__title}><Flip left >{props.title}</Flip></div>
  )
}
