import React from 'react';
import './ControlButton.css';

function ControlButton({ ...props }) {
  return (
    <button onClick={props.handleClick} className={'control-button'}>
      {props.children}
    </button>
  )
}

export default ControlButton;
