import React from 'react';
import './Game.css';
import ControlButton from './ControlButton';
import GameGrid from './GameGrid';
import Counter from './Counter';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.rows = 25;
    this.columns = 25;
    this.speed = 100 // milliseconds.
    this.runningTimerId = null;
    let gameState = this.initialGameState(this.rows, this.columns);
    this.state = {
      gameState: gameState,
      running: false,
      iteration: 0
    }
    this.toggleState = this.toggleState.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.setRunning = this.setRunning.bind(this);
    this.nextIteration = this.nextIteration.bind(this);
    this.getLiveNeighbours = this.getLiveNeighbours.bind(this);
  }

  initialGameState(rows, columns) {
    let gameState = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(0);
      }
      gameState.push(row);
    }
    return gameState;
  }

  toggleState(rowIndex, columnIndex, newState) {
    let updatedGameState = this.state.gameState.map(row => row.slice());
    if (newState === undefined || newState === null) {
      updatedGameState[rowIndex][columnIndex] = !updatedGameState[rowIndex][columnIndex];
    } else {
      updatedGameState[rowIndex][columnIndex] = newState;
    }
    this.setState({ gameState: updatedGameState });
  }

  setRunning(newRunning) {
    this.setState({ running: newRunning });
    if (newRunning) {
      this.nextIteration();
      this.runningTimerId = setInterval(this.nextIteration, this.speed);
    } else {
      clearInterval(this.runningTimerId);
    }
  }

  nextIteration() {
    // Conway's Game of Life logic.
    let nextGameState = this.state.gameState.map((row, rowIndex) =>
      row.map((cellState, columnIndex) => {
        const liveNeighbours = this.getLiveNeighbours(this.state.gameState, rowIndex, columnIndex);
        if (cellState && (liveNeighbours === 2 || liveNeighbours === 3)) return 1;
        if (!cellState && liveNeighbours === 3) return 1;
        return 0;
      })
    );
    this.setState({
      gameState: nextGameState,
      iteration: this.state.iteration + 1
    });
  }

  getLiveNeighbours(gameState, rowIndex, columnIndex) {
    let liveNeighbours = 0;
    for (let y = -1; y <= 1; y++) {
      for (let x = -1; x <= 1; x++) {
        if (x === 0 && y === 0) continue;

        let neighbourRow = rowIndex + y;
        if (neighbourRow < 0) {
          neighbourRow = this.rows - 1;
        } else if (neighbourRow >= this.rows) {
          neighbourRow = 0;
        }

        let neighbourColumn = columnIndex + x;
        if (neighbourColumn < 0) {
          neighbourColumn = this.columns - 1;
        } else if (neighbourColumn >= this.columns) {
          neighbourColumn = 0;
        }

        if (gameState[neighbourRow][neighbourColumn]) {
          liveNeighbours++;
        };
      }
    }
    return liveNeighbours;
  }

  resetGame() {
    clearInterval(this.runningTimerId);
    this.setState({
      gameState: this.initialGameState(this.rows, this.columns),
      running: false,
      iteration: 0
    });
  }

  render() {
    return (
      <div className={'game'}>
        <GameGrid toggleState={this.toggleState} gameState={this.state.gameState} />
        <div className={'controls'}>
          <ControlButton type={'start'} setRunning={this.setRunning} running={this.state.running} />
          <ControlButton type={'reset'} resetGame={this.resetGame} />
          <ControlButton type={'next'} setRunning={this.setRunning} nextIteration={this.nextIteration} />
        </div>
        <div className={'information'}>
          <Counter count={this.state.iteration} text={'Iteration'} />
        </div>
      </div>
    );
  }
}

export default Game;
