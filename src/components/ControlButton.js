import React from 'react';
import PropTypes from 'prop-types';
import './ControlButton.css';

function ControlButton({ ...props }) {
  return (
    <button onClick={props.handleClick} className={'control-button'}>
      {props.children}
    </button>
  )
}

ControlButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default ControlButton;
