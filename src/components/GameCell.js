import React from 'react';
import PropTypes from 'prop-types';
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

GameCell.propTypes = {
    setClickedState: PropTypes.func.isRequired,
    toggleState: PropTypes.func.isRequired,
    cellState: PropTypes.bool.isRequired,
    rowIndex: PropTypes.number.isRequired,
    columnIndex: PropTypes.number.isRequired
}

export default GameCell;