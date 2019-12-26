import React from 'react'
import { withRouter } from 'react-router-dom'
import Flip from 'react-reveal/Flip'
import style from './index.module.css'
import Chart from '../../components/Chart'

function Statistics() {
  return (
    <div className={style.container}>
      
    <div className={style.container__title}><Flip left >General results</Flip></div>
    <div className={style.chart}><Chart /></div>
    
  </div>
  )
}
export default withRouter(Statistics)