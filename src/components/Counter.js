import React from 'react';
import './Counter.css';

function Counter({count, text}) {
return <p className={'text'}>{text}: {count}</p>
}

export default Counter;