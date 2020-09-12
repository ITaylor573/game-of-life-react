import React from 'react';
import './GameCell.css';

function GameCell({ cellState, toggleState, rowIndex, columnIndex, clickedState, setClickedState }) {
    let handleClick = function (e) {
        e.preventDefault();
        setClickedState(cellState);
        toggleState(rowIndex, columnIndex);
    }

    let handleMouseEnter = function (e) {
        if (e.buttons !== 1) return;
        toggleState(rowIndex, columnIndex, !clickedState);
    }

    let className = 'game-cell ' + (cellState ? 'on' : 'off');
    return <td onMouseDown={handleClick} onMouseEnter={handleMouseEnter} className={className} />
}

export default GameCell;