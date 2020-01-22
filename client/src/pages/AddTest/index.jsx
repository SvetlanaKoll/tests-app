import React, { useEffect, useState } from 'react'
import sea from '../../static/sea-book.jpg'
import style from './index.module.css'
import FirstBlock from '../../components/FirstBlock'
import QuestionAdd from '../../components/QuestionAdd'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid/v1'
import doFetch from '../../utils/doFetch'
import { useAuth0 } from '../../react-auth0-spa'

function AddTest ({ history }) {
  const [questions, setQuestions] = useState([])
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [topics, setTopics] = useState([])
  const [testTitle, setTestTitle] = useState('')
  const [newTopicTitle, setNewTopicTitle] = useState('')
  const [newTopicDescription, setNewTopicDescription] = useState('')
  const [timeLimit, setTimeLimit] = useState(20)
  const { token } = useAuth0()

  // useEffect(() => {
  //   console.log(selectedTopic)
  // }, [selectedTopic])

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          const data = await doFetch(token, 'GET', 'topics')

          console.log(data)

          if (data.success) {
            console.log(data.topics)
            setTopics(data.topics)
          }
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [token])

  const createNewTopic = async () => {
    try {
      const result = await doFetch(token, 'POST', 'topics/new', {
        title: newTopicTitle,
        description: newTopicDescription
      })

      if (result.success) {
        console.log(result.topic)
        setTopics([...topics, result.topic])
        setNewTopicDescription('')
        setNewTopicTitle('')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const addTest = async () => {
    if (token) {
      if (window.confirm('Are you ready to add test?')) {
        try {
          const result = await doFetch(token, 'POST', 'tests/new', {
            title: testTitle,
            topicId: selectedTopic,
            timeLimit,
            questions
          })

          if (result.success) {
            history.push(`/tests/${result.test._id}`)
          } else {
            alert('An error did happen!')
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  return (
    <div className={style.container}>

      <FirstBlock image={sea} title='Add Your Test' color='rgb(66, 72, 74)'/>
      <div className={style.box}>
        <div className='md-form input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Your new topic'
            aria-label="Recipient's username with two button addons"
            aria-describedby='MaterialButton-addon4'
            value={newTopicTitle}
            onChange={(e) => setNewTopicTitle(e.target.value)}
          />
        </div>
        <div className='md-form input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Description of your topic'
            aria-label="Recipient's username with two button addons"
            aria-describedby='MaterialButton-addon4'
            value={newTopicDescription}
            onChange={(e) => setNewTopicDescription(e.target.value)}
          />
          <div className='input-group-append' id='MaterialButton-addon4'>
            <button
              className='btn btn-md btn-primary m-0 px-3'
              type='button'
              onClick={createNewTopic}
            >
              Add topic
            </button>
          </div>
        </div>

        <select
          className='browser-default custom-select'
          onChange={e => setSelectedTopic(e.target.value)}
        >
          <option defaultSelected value='0'>Choose your topic</option>
          {topics.map(topic => (
            <option
              value={topic._id}
              key={topic._id}
            >
              {topic.title}
            </option>
          ))}
        </select>

        <div className='md-form input-group'>
          <input type='text'
            className='form-control'
            placeholder='Your test name'
            aria-label="Recipient's username with two button addons"
            aria-describedby='MaterialButton-addon4'
            value={testTitle}
            onChange={e => setTestTitle(e.target.value)}
          />
          <div className='input-group-append' id='MaterialButton-addon4'>
          </div>
        </div>
        <div className={style.inputTime}>
          <div className={style.inputTime__limit}>Time Limit:</div>
          <div className='def-number-input number-input safari_only'>
            <input
              type='number'
              min='5'
              step='5'
              defaultValue='20'
              value={timeLimit}
              onChange={(e) => setTimeLimit(parseInt(e.target.value))}
            />
          </div>
        </div>

        {questions.map(({ id, content, options }) => (
          <QuestionAdd id={id} key={id} content={content} options={options} questions={questions} setQuestions={setQuestions} />))
        }

        <div className={style.btns}>
          <button
            className='btn btn-md btn-primary m-0 px-3'
            type='button'
            onClick={() => setQuestions([...questions, { id: uuid(), content: '', options: [] }])}
          >
          + question
          </button>
          <button
            className='btn btn-md btn-secondary m-0 px-3'
            type='button'
            onClick={addTest}
          >
            Add test
          </button>
        </div>

      </div>

    </div>
  )
}
export default withRouter(AddTest)
