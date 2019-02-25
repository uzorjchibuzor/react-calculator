import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      next: '',
      operation: '',
    }
  }
  handleClick(event) {
    const buttonName = event.target.innerHTML
    let data = calculate(this.state, buttonName)
    this.setState({
      total: data.total,
      next: data.next,
      operation: data.operation
    })
  }
  render() {
    const { total, next } = this.state;
    const result = total || next || 0;
    
    return (
        <div id="app">
          <h1> React Calculator </h1>
          <Display result={ `${result}` } />
          <ButtonPanel onClick={ () => this.handleClick.bind(this) } />
        </div>
    )
  }
}

export default App

