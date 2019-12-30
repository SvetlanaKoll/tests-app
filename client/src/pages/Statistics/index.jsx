import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.css'
import Chart from '../../components/Chart'
import FirstBlock from '../../components/FirstBlock'
import lamp3 from '../../static/lamp3.webp'
function Statistics() {
  return (
    <div className={style.container}>
      <FirstBlock image={lamp3} title='Statistics' color='rgb(66, 72, 74)'/>
    <div className={style.chart}><Chart /></div>
    
  </div>
  )
}
export default withRouter(Statistics)