import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import style from './index.module.css'
import { Link } from 'react-router-dom'
export default function Sidebar() {

  return (
    <Fade left>
    <div className={style.sidebar}>
    <Link to='/'>
      <div className={style.sidebar__btn}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      </Link>
      <div className={style.nav}>
      <Fade left cascade>
        <div className={style.nav__li}>Pass the test</div>
        <div className={style.divider}>|</div>
        <Link to='/themes'>
        <div className={style.nav__li}>Themes of tests</div>
        </Link>
        <div className={style.divider}>|</div>
        <div className={style.nav__li}>Add test</div>
        <div className={style.divider}>|</div>
        <Link to='/statistics'>
        <div className={style.nav__li}>Statistics</div>
        </Link>
        <div className={style.divider}>|</div>
        <Link to='/about'>
        <div className={style.nav__li}>About us</div>
        </Link>
        </Fade>
      </div>
    </div>
    </Fade>
  )
}
