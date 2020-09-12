import React from 'react';
import './GameCell.css';

function GameCell({ cellState }) {
    let className = 'game-cell ' + (cellState ? 'on' : 'off');
    return <td className={className} />
}

export default GameCell;