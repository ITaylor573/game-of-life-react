import React from 'react';
import './GameGrid.css';
import GameCell from './GameCell';


class GameGrid extends React.Component {
  constructor(props) {
    super(props);
    this.clickedState = true;
    this.setClickedState = this.setClickedState.bind(this);
  }

  setClickedState(newState) {
    this.clickedState = newState;
  }

  render() {
    const gameCells = this.props.gameState.map((row, rowIndex) =>
      <tr key={rowIndex}>
        {row.map((cellState, columnIndex) =>
          <GameCell
            setClickedState={this.setClickedState}
            clickedState={this.clickedState}
            toggleState={this.props.toggleState}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            cellState={cellState}
            key={rowIndex + "-" + columnIndex} />
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
}

export default GameGrid;
