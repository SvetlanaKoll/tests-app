import React from 'react'
import style from './index.module.css'
import Checkbox from '../Checkbox'
export default function QuestionsItem (props) {
  return (
    <div className={style.box}>
      <div className={style.box__question}>{props.content}</div>
      {props.options.map(option => (
        <Checkbox
          doValidate={props.doValidate}
          isCorrect={option.isCorrect}
          isChecked={option.isChecked}
          key={option.optId}
          correctColor='green'
          falseColor='red'
          id={option.optId}
          label={option.content}
          onChange={(e) => props.setUserSelections(props.userSelections.map(item =>
            item.itemId === props.itemId
              ? {
                ...item,
                options: item.options.map(currentOption =>
                  currentOption.optId === option.optId
                    ? { ...currentOption, isChecked: e.target.checked }
                    : currentOption
                )
              }
              : item
          ))}
        />
      ))}

    </div>
  )
}
