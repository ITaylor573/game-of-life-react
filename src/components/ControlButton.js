import React from 'react';
import './ControlButton.css';

function ControlButton({ text }) {
    return <button className={'control-button'}>{ text }</button>
} 

export default ControlButton;
