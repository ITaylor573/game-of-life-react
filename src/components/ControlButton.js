import React from 'react';
import './ControlButton.css';

class ControlButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
  }

  handleStartClick() {
    if (this.props.running) {
      this.props.setRunning(false);
    } else {
      this.props.setRunning(true);
    }
  }

  handleResetClick() {
    this.props.resetGame();
  }

  handleNextClick() {
    this.props.setRunning(false);
    this.props.nextIteration();
  }

  handlePreviousClick() {
    this.props.setRunning(false);
    this.props.previousIteration();
  }

  render() {
    if (this.props.type === 'start') {
      return <button onClick={this.handleStartClick} className={'control-button'}>{this.props.running ? 'PAUSE' : 'PLAY'}</button>
    } else if (this.props.type === 'reset') {
      return <button onClick={this.handleResetClick} className={'control-button'}>RESET</button>
    } else {
      return <button onClick={this.handleNextClick} className={'control-button'}>NEXT</button>
    }
  }
}

export default ControlButton;
