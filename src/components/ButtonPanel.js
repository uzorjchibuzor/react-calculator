import React from 'react';
import Button from './Button'

const ButtonPanel = (props) => {
  const buttonGroups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  const panels = buttonGroups.map((group, index) => {
      return (
    <div key={group+index} className='group-row'>
      {group.map((cell, index) => <Button name={cell} key={cell+index} onClick={ () => props.onClick()} />)}
      
    </div>
   )
  }
)
  
  return (
    <div className='button-panel'>
      {panels}
    </div>
  )
}

export default ButtonPanel