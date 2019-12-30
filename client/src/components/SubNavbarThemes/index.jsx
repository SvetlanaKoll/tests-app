import React from 'react'
import Fade from 'react-reveal/Fade'
import style from './index.module.css'

export default function SubNavbarThemes({ closeMenu }) {

  return (
    <ul 
      className={style.container}
      onMouseLeave={closeMenu}
    >
       <Fade top >
      <li className={style.container__li}>Pregnancy</li>
      <li className={style.container__li}>Psycho</li>
      <li className={style.container__li}>English</li>
      </Fade>
    </ul>
  )
}
