import React from 'react';
import './App.css';
import Title from './components/Title';
import Game from './components/Game';

function App() {
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
    <>
      <Title />
      <Game />
    </>
  );
}

export default App;
