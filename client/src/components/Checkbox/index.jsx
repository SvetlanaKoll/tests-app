import React from 'react'

export default function Checkbox(props) {
  return (
  
      <div className="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id={props.id}></input>
          <label style={{ color: `${props.correctColor}` }}
          className="custom-control-label" 
          for={props.id}
          >
          {props.label} variant
          </label>
         
      </div>

  )
}
