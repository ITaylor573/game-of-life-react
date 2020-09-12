import React from 'react';
import './ControlButton.css';

class ControlButton extends React.Component {

    constructor(props) {
      super(props);
      if (props.type === 'start') {
        this.handleStartClick = this.handleStartClick.bind(this);
      } else {
        this.handleResetClick = this.handleResetClick.bind(this);
      }
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

    render() {
      if (this.props.type === 'start') {
          return <button onClick={this.handleStartClick} className={'control-button'}>{this.props.running ? 'PAUSE' : 'PLAY' }</button>
      } else {
          return <button onClick={this.handleResetClick} className={'control-button'}>RESET</button>
      }
    }
}

export default ControlButton;
