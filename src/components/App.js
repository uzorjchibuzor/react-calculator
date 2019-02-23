import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }
  handleClick(buttonName) {
    this.setState(
      calculate(this.state.total, this.state.next, this.state.operation), buttonName
    )
  }
  render() {
      return (
          <div id="app">
            <Display result={this.state.total || this.state.next || 0} />
            <ButtonPanel onClick={() => this.handleClick()}/>
          </div>
      )
  }
}

export default App