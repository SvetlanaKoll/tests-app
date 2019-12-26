import React from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import Flip from 'react-reveal/Flip'
import ThemeItem from '../../components/ThemeItem'

function Themes() {
  return (
    <div className={style.container}>
      
      <div className={style.container__title}><Flip left >Themes of Tests </Flip></div>
      <div className={style.themes}>
        {/* smth to render. map( item => ...) */}
        <ThemeItem />
        <ThemeItem />
      </div>
    </div>
  )
}
export default withRouter(Themes)