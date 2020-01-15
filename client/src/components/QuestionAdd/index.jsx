import React from 'react'
import style from './index.module.css'
import Option from '../Option'
import uuid from 'uuid/v1'

export default function QuestionAdd (props) {
  return (
    <div className={style.container}>
      <div className='md-form input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Your question'
          aria-label="Recipient's username with two button addons"
          aria-describedby='MaterialButton-addon4'
          value={props.content}
          onChange={(e) => props.setQuestions(props.questions.map(question =>
            question.id === props.id
              ? { ...question, content: e.target.value }
              : question
          ))}
        />

      </div>
      <div className={style.answers}>
        {props.options.map(({ id, content, isCorrect }) => (
          <Option
            id={id}
            questionId={props.id}
            key={id}
            content={content}
            isCorrect={isCorrect}
            questions={props.questions}
            setQuestions={props.setQuestions}/>
        ))}

        <button
          className='btn btn-md btn-info m-0 px-3'
          type='button'
          onClick={() => props.setQuestions(props.questions.map(item => item.id === props.id ? { ...item, options: [...item.options, { id: uuid(), content: '', isCorrect: false }] } : item))}
        >
           + option
        </button>
        <button
          className='btn btn-md btn-danger m-0 px-3'
          type='button'
          onClick={() => props.setQuestions(props.questions.filter(question => question.id !== props.id))}
        >
          delete
        </button>
      </div>

    </div>
  )
}
