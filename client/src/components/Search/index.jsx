import React from 'react'
import style from './index.module.css'
import search from '../../static/search.svg'
export default function

Search (props) {
  return (
    <div className={style.container}>
      <div className='md-form input-group mb-3'>
        <div className='input-group-prepend'>

          <span className='input-group-text md-addon' id='material-addon1'><img className={style.search} src={search} alt='search'/></span>
        </div>

        <input
          type='text'
          className='form-control'
          placeholder='What do you look for?'
          aria-label='Username'
          aria-describedby='material-addon1'
          onChange={e => props.onInputChange(e)}
        />
        <select
          style={{ backgroundColor: 'transparent', color: 'slategray' }}
          className='browser-default custom-select'
          onChange={e => props.onSelectChange(e)}
        >
          <option selected>Sort by</option>
          <option value='1'>Quantity</option>
          <option value='2'>Popular</option>
          <option value='3'>Newest</option>
        </select>
      </div>
    </div>
  )
}
