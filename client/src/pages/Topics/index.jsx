import React, { useState } from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import ThemeItem from '../../components/ThemeItem'
import FirstBlock from '../../components/FirstBlock'
import Search from '../../components/Search'
import lamp from '../../static/lamp.webp'
function Topics () {
  const [topics, setThemes] = useState([])
  const [themesToDisplay, setThemesToDisplay] = useState([])

  const filterThemes = searchString => setThemesToDisplay(searchString ? topics.filter(theme => theme.title.includes(searchString) || theme.description.includes(searchString)) : topics)
  return (
    <div className={style.container}>
      <FirstBlock image={lamp} title='Topics' color='#fff'/>
      <Search onChange={filterThemes}/>
      <div className={style.topics}>
        {/* smth to render. map( item => ...) */}
        <ThemeItem name='English'/>
      </div>
    </div>
  )
}
export default withRouter(Topics)
