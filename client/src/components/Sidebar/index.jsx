import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import style from './index.module.css'
export default function Sidebar() {

  return (
    <Fade left>
    <div className={style.sidebar}>
      <div className={style.sidebar__btn}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <div className={style.nav}>
      <Fade left cascade>
        <div className={style.nav__li}>Pass the test</div>
        <div className={style.divider}>|</div>
        <div className={style.nav__li}>Themes of tests</div>
        <div className={style.divider}>|</div>
        <div className={style.nav__li}>Add test</div>
        <div className={style.divider}>|</div>
        <div className={style.nav__li}>Statistics</div>
        <div className={style.divider}>|</div>
        <div className={style.nav__li}>About us</div>
        </Fade>
      </div>
    </div>
    </Fade>
  )
}
