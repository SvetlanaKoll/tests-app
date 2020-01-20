import React from 'react'

export default function Checkbox (props) {
  return (

    <div className='custom-control custom-checkbox'>
      <input
        type='checkbox'
        className='custom-control-input'
        id={props.id}
        onChange={props.onChange}
      />
      <label
        // style={{ color: `${props.correctColor}` }}
        className='custom-control-label'
        htmlFor={props.id}
      >
        {props.label}
      </label>

    </div>

  )
}
