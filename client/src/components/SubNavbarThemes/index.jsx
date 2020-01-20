import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../react-auth0-spa'
import doFetch from '../../utils/doFetch'

export default function SubNavbarThemes () {
  const { token } = useAuth0()
  const [topics, setTopics] = useState([])

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const result = await doFetch(token, 'GET', 'topics')

          if (result.success) {
            setTopics(result.topics)
          }
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [token])

  return (
    <div>
      <ul className={style.container}>
        <Fade top >
          <>
            <Link to='/topics'><li className={style.container__li}>All Themes</li></Link>
            {topics.map(topic => (
              <Link
                key={topic.id}
                to={`/tests/topic/:${topic._id}`}
              >
                <li className={style.container__li}>
                  {topic.title}
                </li>
              </Link>
            ))}
          </>
        </Fade>
      </ul>

    </div>
  )
}
