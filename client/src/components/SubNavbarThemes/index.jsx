import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import style from './index.module.css'

export default function SubNavbarThemes() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onClick={() => setIsOpen(true)}
    >
      {isOpen
        ? (
          <ul 
            className={style.container}
          >
            <Fade top >
            <li className={style.container__li}>All Themes</li>
            <li className={style.container__li}>Psycho</li>
            <li className={style.container__li}>English</li>
            </Fade>
          </ul>
        )
        : null
      } 
    </div>
  )
}
