import React from 'react';
import './GameGrid.css';
import GameCell from './GameCell';

function GameGrid({ gameState }) {
    const gameCells = gameState.map((row, rowIndex) => 
        <tr key={rowIndex}>
            {row.map((cellState, columnIndex) =>
                <GameCell cellState={cellState} key={rowIndex.toString() + columnIndex.toString()}/>
            )}
        </tr>
    );

    return (
        <table className={'game-grid'}>
            <tbody>
                {gameCells}
            </tbody>
        </table>
    );
}

export default GameGrid;
