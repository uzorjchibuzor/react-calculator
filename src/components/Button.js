import React from 'react';
import PropTypes from 'prop-types'


class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    // color: PropTypes.string.isRequired,
  }
  render() {
    let buttonClass = ''
    buttonClass += (this.props.color === 'orange') ? 'orange ' : 'gray '
    buttonClass += (this.props.name === '0') ? 'zero-button ' : 'number-buttons '

    return (
      <button
        className={ buttonClass }
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    )
  }
}


export default Button
