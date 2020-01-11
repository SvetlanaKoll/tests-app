import React from 'react'
import style from './index.module.css'
export default function QuestionAdd(props) {
  
  return (
    <div className={style.container}>
    <div class="md-form input-group">
          <input type="text" class="form-control" placeholder="Your question" aria-label="Recipient's username with two button addons"
            aria-describedby="MaterialButton-addon4"></input>
            
         
    </div>
    <div className={style.answers}>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input type="checkbox" aria-label="Checkbox for following text input"></input>
        </div>
      </div>
      <input type="text" class="form-control" placeholder="Your answer option" aria-label="Text input with checkbox"></input>
      <div class="input-group-append">
    <button className={style.del} type="button" id="MaterialButton-addon2">X</button>
  </div>
    </div>
        <button class="btn btn-md btn-info m-0 px-3" type="button">+ option</button>
</div>
    
    </div>
  )
}
