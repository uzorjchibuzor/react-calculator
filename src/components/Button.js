import React from 'react';
import PropTypes from 'prop-types'


const Button = (props) => ( <button  onClick={() => props.onClick()} color={ props.color ? props.color : 'orange'}
  className={props.name === '0' ? 'zero-button ' : 'number-buttons ' } > { props.name }
 
  </button> )
Button.propTypes = {
    name: PropTypes.string.isRequired
}


export default Button