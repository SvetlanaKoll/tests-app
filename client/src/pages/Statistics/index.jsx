import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.css'
import Chart from '../../components/Chart'
import FirstBlock from '../../components/FirstBlock'
import lamp3 from '../../static/lamp3.webp'
import { useAuth0 } from '../../react-auth0-spa'
import doFetch from '../../utils/doFetch'

function Statistics () {
  const { token } = useAuth0()
  const [data, setData] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const data = await doFetch(token, 'GET', 'stats/tests/popular')

        console.log(data)

        if (data.success) {
          console.log(data)
          setData(data.data)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className={style.container}>
      <FirstBlock image={lamp3} title='Statistics' color='rgb(66, 72, 74)'/>
      <div className={style.chart}>
      <Chart data={data}/>
      </div>
    </div>
  )
}
export default withRouter(Statistics)
