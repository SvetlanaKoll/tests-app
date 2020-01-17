import React from 'react'
import Fade from 'react-reveal/Fade'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function SubNavbarThemes() {
 

  return (
    <div>
          <ul className={style.container}>
            <Fade top >
            <Link to='/themes'><li className={style.container__li}>All Themes</li></Link>
            <li className={style.container__li}>Psycho</li>
            <li className={style.container__li}>English</li>
            </Fade>
          </ul>
        
      
    </div>
  )
}
