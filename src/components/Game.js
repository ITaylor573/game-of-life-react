import React from 'react';
import './Game.css';
import ControlButton from './ControlButton';
import GameGrid from './GameGrid';

class Game extends React.Component {
  render() {
    const rows = 25;
    const columns = 25;
    let gameState = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(Math.round(Math.random()));
      }
      gameState.push(row);
    }

    return (
      <div className={'game'}>
        <GameGrid gameState={gameState} />
        <div className={'controls'}>
          <ControlButton text={'Start'} />
          <ControlButton text={'Clear'} />
        </div>
      </div>
    );
  }
}

export default Game;
