import React from 'react'
import style from './index.module.css'
export default function QuestionAdd(props) {
  
  return (
    <div className={style.container}>
    <div className="md-form input-group">
          <input type="text" className="form-control" placeholder="Your question" aria-label="Recipient's username with two button addons"
            aria-describedby="MaterialButton-addon4"></input>
            
         
    </div>
    <div className={style.answers}>

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" aria-label="Checkbox for following text input"></input>
        </div>
      </div>
      <input type="text" className="form-control" placeholder="Your answer option" aria-label="Text input with checkbox"></input>
      <div className="input-group-append">
    <button className={style.del} type="button" id="MaterialButton-addon2">X</button>
  </div>
    </div>
        <button className="btn btn-md btn-info m-0 px-3" type="button">+ option</button>
        <button 
          className="btn btn-md btn-danger m-0 px-3" 
          type="button"
          onClick={() => props.setQuestions( props.questions.filter( question => question.id !== props.id))}
        >
          delete
        </button>
</div>
    
    </div>
  )
}
