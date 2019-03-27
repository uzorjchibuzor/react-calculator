import operate from './operate'

const calculate = (data, buttonName) => {
  

    switch (buttonName) {
      case 'AC':
        data.total = 0;
        data.next = '';
        break;
      case '+/-':
        if (data.next !== '') {
          data.next = parseFloat(data.next) * -1;
        } else data.total = parseFloat(data.total) * -1;
        break;
      case '%':
        if (data.next !== '') {
          data.next = parseFloat(data.next) / 100;
        } else {
          data.total = data.total / 100;
        }
        break;

      case '÷' :
      case 'X':
      case '+':
      case '-':
          data.operation = buttonName;
        if (data.next !== '') {
          data.total = operate(parseFloat(data.total), parseFloat(data.next), buttonName);
        }
          data.next = ''
        break;
      case '=':
        if (data.next !== '') {
          data.total = operate(parseFloat(data.total), parseFloat(data.next), data.operation);
        
          data.next = ''
        }
        break;

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        data.next += buttonName;
       
        break;
      default:

        break;
    }
  
    return data;

}

export default calculate