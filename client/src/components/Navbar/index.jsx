import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import style from './index.module.css'
import { Link } from 'react-router-dom'
import SubNavbarThemes from '../SubNavbarThemes'
export default function Navbar() {
  return (
    <Fade left>
    <div className={style.sidebar}>
    <Link to='/'>
     
        <div className={style.line}></div>
     
      </Link>
      <div className={style.nav}>
      <Fade left cascade>
      <Link to='/tests'>
        <div className={style.nav__li}>Tests</div>
      </Link>
       
        
        <div className={style.nav__li}>
          <Link className={style.nav__li__themes} to='/themes'>Themes of tests </Link>
          <div className={style.nav__sub}>
            <SubNavbarThemes/>     
          </div>
        </div>
       
       
      
        <Link to='/add'>
        <div className={style.nav__li}>Add test</div>
        </Link>
        
        <Link to='/statistics'>
        <div className={style.nav__li}>Statistics</div>
        </Link>
        
        <Link to='/about'>
        <div className={style.nav__li}>About us</div>
        </Link>
        </Fade>
      </div>
    </div>
    </Fade>
  )
}
