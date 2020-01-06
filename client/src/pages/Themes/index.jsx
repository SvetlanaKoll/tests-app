import React from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import ThemeItem from '../../components/ThemeItem'
import FirstBlock from '../../components/FirstBlock'
import Search from '../../components/Search'
import lamp from '../../static/lamp.webp'
function Themes() {
  return (
    <div className={style.container}>
      <FirstBlock image={lamp} title='Themes of Tests' color='#fff'/>
      <Search />
      <div className={style.themes}>
        {/* smth to render. map( item => ...) */}
        <ThemeItem name='English'/>
      </div>
    </div>
  )
}
export default withRouter(Themes)