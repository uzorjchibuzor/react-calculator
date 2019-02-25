const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === 0) return numberTwo
  
  if (operation === '-') {
    return Big(numberOne - numberTwo)
  } else if (operation === '+') {
      return Big(numberOne + numberTwo)
  } else if (operation === '÷') {
    return Big(numberOne / numberTwo)
  } else if (operation === 'X') {
    return Big(numberOne * numberTwo)
  } else if (operation === '%') {
    return Big(numberOne % numberTwo)
  }
}

export default operate