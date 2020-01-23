import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import { withRouter } from 'react-router-dom'
import ThemeItem from '../../components/ThemeItem'
import FirstBlock from '../../components/FirstBlock'
import Search from '../../components/Search'
import lamp from '../../static/lamp.webp'
import doFetch from '../../utils/doFetch'
import { useAuth0 } from '../../react-auth0-spa'

function Topics () {
  const [topics, setTopics] = useState([])
  const [topicsToDisplay, setTopicsToDisplay] = useState([])
  const { token } = useAuth0()
  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const data = await doFetch(token, 'GET', 'topics')

          console.log(data)

          if (data.success) {
            console.log(data.topics)
            setTopics(data.topics)
            setTopicsToDisplay(data.topics)
          }
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [token])

  const filterThemes = searchString => setTopicsToDisplay(searchString ? topics.filter(theme => theme.title.includes(searchString) || theme.description.includes(searchString)) : topics)
  return (
    <div className={style.container}>
      <FirstBlock image={lamp} title='Topics' color='#fff'/>
      <Search onChange={filterThemes}/>
      <div className={style.topics}>
        {topicsToDisplay.map(({ _id, title, description }) => (
          <ThemeItem key={_id} _id={_id} title={title} description={description}/>
        ))}

      </div>
    </div>
  )
}
export default withRouter(Topics)
