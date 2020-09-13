import React from 'react';
import './GameCell.css';

function GameCell({ ...props }) {
    let handleClick = function (e) {
        e.preventDefault();
        props.setClickedState(props.cellState);
        props.toggleState(props.rowIndex, props.columnIndex);
    }

    let handleMouseEnter = function (e) {
        if (e.buttons !== 1) return;
        props.toggleState(props.rowIndex, props.columnIndex, !props.clickedState);
    }

    let className = 'game-cell ' + (props.cellState ? 'on' : 'off');
    return <td onMouseDown={handleClick} onMouseEnter={handleMouseEnter} className={className} />
}

export default GameCell;