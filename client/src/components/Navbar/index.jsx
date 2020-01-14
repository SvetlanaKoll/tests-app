import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import style from './index.module.css'
import { Link } from 'react-router-dom'
import SubNavbarThemes from '../SubNavbarThemes'
import { useAuth0 } from '../../react-auth0-spa'
import Profile from '../Profile'
import history from "../../utils/history";

export default function Navbar() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
  })

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

        {isAuthenticated
          ? (
            <div 
              className={style.nav__li}
              onClick={() => logoutWithRedirect({})}
            >
              Log Out
            </div>
          )
          : (
            <div 
              className={style.nav__li}
              onClick={() => loginWithRedirect({})}
            >
              Log In
            </div>
          )
          
        }
       <Link to='/profile'>
        {isAuthenticated
                  ? (
                   
                    <div className={style.nav__li}><Profile /></div>
                 
                  )
                  : (
                    null
                  )
                  
        }
   </Link>
       
        </Fade>
      </div>
    </div>
    </Fade>
  )
}
