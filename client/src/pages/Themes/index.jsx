import React from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import Flip from 'react-reveal/Flip'
import ThemeItem from '../../components/ThemeItem'
import FirstBlock from '../../components/FirstBlock'
import lamp from '../../static/lamp.webp'
function Themes() {
  return (
    <div className={style.container}>
      <FirstBlock image={lamp} title='Themes of Tests' color='#fff'/>
      <div className={style.themes}>
        {/* smth to render. map( item => ...) */}
        <ThemeItem name='English'/>
      </div>
    </div>
  )
}
export default withRouter(Themes)