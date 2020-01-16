import React, { useEffect, useState } from 'react'
import sea from '../../static/sea-book.jpg'
import style from './index.module.css'
import FirstBlock from '../../components/FirstBlock'
import QuestionAdd from '../../components/QuestionAdd'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid/v1'

function AddTest () {
  const [questions, setQuestions] = useState([])
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [themes, setThemes] = useState([])
  const [testTitle, setTestTitle] = useState('')
  // useEffect(() => {
  //   setQuestions([{}, {}, {}])
  // }, [])

  useEffect(() => {
    setThemes([...themes, { id: uuid(), title: 'English' }, { id: uuid(), title: 'Physics' }])
  }, [])

  useEffect(() => {
    console.log(questions)
  }, [questions])
  return (
    <div className={style.container}>

      <FirstBlock image={sea} title='Add Your Test' color='rgb(66, 72, 74)'/>
      <div className={style.box}>

        <div className='md-form input-group'>
          <input type='text' className='form-control' placeholder='Your new theme' aria-label="Recipient's username with two button addons"
            aria-describedby='MaterialButton-addon4'></input>
          <div className='input-group-append' id='MaterialButton-addon4'>
            <button
              className='btn btn-md btn-primary m-0 px-3'
              type='button'
            >
              Add theme
            </button>
          </div>
        </div>

        <select
          className='browser-default custom-select'
          onChange={e => setSelectedTheme(e.target.value)}
        >
          <option defaultSelected value='0'>Choose your theme</option>
          {themes.map(theme => (
            <option
              value={theme.id}
              key={theme.id}
            >
              {theme.title}
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
          >

          </input>
          <div className='input-group-append' id='MaterialButton-addon4'>
            {/* <button class="btn btn-md btn-primary m-0 px-3" type="button">Add name</button> */}
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
          <button className='btn btn-md btn-secondary m-0 px-3' type='button'>Add test</button>
        </div>

      </div>

    </div>
  )
}
export default withRouter(AddTest)
