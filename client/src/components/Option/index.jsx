import React from 'react'
import style from './index.module.css'

export default function Option (props) {
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <div className='input-group-text'>
          <input
            type='checkbox'
            aria-label='Checkbox for following text input'
            onChange={(e) => props.setQuestions(props.questions.map(question =>
              question.id === props.questionId
                ? {
                  ...question,
                  options: question.options.map(option =>
                    option.id === props.id
                      ? { ...option, isCorrect: e.target.checked }
                      : option
                  )
                }
                : question
            ))}
          />
        </div>
      </div>
      <input
        type='text'
        className='form-control'
        placeholder='Your answer option'
        aria-label='Text input with checkbox'
        onChange={(e) => props.setQuestions(props.questions.map(question =>
          question.id === props.questionId
            ? {
              ...question,
              options: question.options.map(option =>
                option.id === props.id
                  ? { ...option, content: e.target.value }
                  : option
              )
            }
            : question
        ))}
      />
      <div className='input-group-append'>
        <button
          className={style.del}
          type='button'
          id={props.id}
          onClick={ () => props.setQuestions(props.questions.map(item =>
            item.id === props.questionId
              ? { ...item, options: item.options.filter(option => option.id !== props.id) }
              : item
          ))}
        >
          &times;
        </button>
      </div>
    </div>
  )
}
