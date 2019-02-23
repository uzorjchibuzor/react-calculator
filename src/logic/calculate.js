import operate from './operate'

const calculate = ({ total, next, operation }, buttonName) => {

  if (buttonName === '+/-') {
      total *= -1
    return { total, next, operation }
  } else if (['+', '-', 'X', '÷', '%'].includes(buttonName)) {
     total = operate(total, next, buttonName)
     return { total, next, operation } 
  }
  
}

export default calculate