import React from 'react'
import style from './index.module.css'
export default function QuestionAdd(props) {
  
  return (
    <>
    <div class="md-form input-group">
          <input type="text" class="form-control" placeholder="Your question" aria-label="Recipient's username with two button addons"
            aria-describedby="MaterialButton-addon4"></input>
          <div class="input-group-append" id="MaterialButton-addon4">          
          </div>
    </div>
    <div className={style.answers}>

    <div class="md-form input-group">
          <input type="text" class="form-control" placeholder="Answer" aria-label="Recipient's username with two button addons"
            aria-describedby="MaterialButton-addon4"></input>
          <div class="input-group-append" id="MaterialButton-addon4">   
          <button class="btn btn-md btn-default m-0 px-3" type="button">is correct</button>      
          <button class="btn btn-md btn-primary m-0 px-3" type="button">+ variant</button> 
          </div>
    </div>
    
    </div>
    </>
  )
}
