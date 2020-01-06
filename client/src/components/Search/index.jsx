import React from 'react'
import style from './index.module.css'
import search from '../../static/search.svg'
export default function 
Search(props) {
  return (
    <div className={style.container}>
      <div class="md-form input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon1"><img className={style.search} src={search} alt="search"/></span>
        </div>
        <input type="text" class="form-control" placeholder="What do you look for?" aria-label="Username" aria-describedby="material-addon1"></input>
      </div>
    </div>
  )
}
