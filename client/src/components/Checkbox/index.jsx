import React, { useEffect } from 'react'

export default function Checkbox (props) {
  const isChecked = props.isChecked || undefined
  const isCorrect = props.isChecked === props.isCorrect

  console.log('ischecked', isChecked)

  return (

    <div className='custom-control custom-checkbox'>
      <input
        type='checkbox'
        className='custom-control-input'
        id={props.id}
        onChange={props.onChange}
        disabled={props.doValidate}
        checked={isChecked}
      />
      <label
        style={{ color: props.doValidate ? isCorrect ? `${props.correctColor}` : `${props.falseColor}` : ''}}
        className='custom-control-label'
        htmlFor={props.id}
      >
        {props.label}
      </label>

    </div>

  )
}
