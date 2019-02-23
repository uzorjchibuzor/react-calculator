import React from 'react';
import PropTypes from 'prop-types'

const Display = (props) => ( <div className='display-bar'> { props.result } </div> )

Display.defaultProps = { result: '0' }
Display.propTypes = {
    result: PropTypes.string.isRequired
}

export default Display
