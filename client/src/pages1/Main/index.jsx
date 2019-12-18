import React from 'react'
import style from './index.module.css'
import Fade from 'react-reveal/Fade';
export default function Main() {
  return (
    <div className={style.container}>
      <Fade left cascade>
      <div className={style.logo}>
        <div className={style.logo__big}>Perception</div>
        <div className={style.logo__small}>of yourself</div>
      </div>
      
      <div className={style.title}>
        <div className={style.title__big}>Culture</div>
        <div className={style.title__md}>of knowledge</div>
        <div className={style.title__small}>Lorem ipsum dolor sit amet consectetur.</div>       
      </div>
      </Fade>
      <Fade bottom>
      <button className={style.title__btn}>View more...</button>
      </Fade>
    </div>
  )
}
