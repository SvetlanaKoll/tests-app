import React, { useRef, useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import SubNavbarThemes from '../SubNavbarThemes'
import { useAuth0 } from '../../react-auth0-spa'
import Profile from '../Profile'
import ProtectedElement from '../ProtectedElement'

export default function Navbar () {
  const { isAuthenticated, loginWithRedirect, logout, scope } = useAuth0()
  const [isShown, setIsShown] = useState(false)
  const dropDownRef = useRef(null)
  console.log(scope);

  useEffect(() => {
    if (dropDownRef.current) {
      document.body.addEventListener('click', e => {
        if (e.target !== dropDownRef.current) {
          setIsShown(false)
        }
      })
    }
  }, [dropDownRef])

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

            <div
              className={style.nav__li}
              onClick={() => {
                if (isShown) {
                  setIsShown(false)
                } else {
                  setIsShown(true)
                }
              }}>
                Themes of tests
              <div
                className={style.nav__sub}
                ref={dropDownRef}
              >
                {isShown
                  ? <SubNavbarThemes/>
                  : null
                }
              </div>
            </div>
            <ProtectedElement
              scope={scope}
              requiredScope={['create:tests']}
            >
              <Link to='/add'>
                <div className={style.nav__li}>Add test</div>
              </Link>
            </ProtectedElement>
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
            <div className={style.nav__li}>
              {isAuthenticated
                ? (

                  <Profile />

                )
                : (
                  null
                )

              }
            </div>

          </Fade>
        </div>
      </div>
    </Fade>
  )
}
