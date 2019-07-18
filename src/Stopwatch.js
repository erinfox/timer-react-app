import React, {Component} from "react";
import "./App.css";
class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  // when the timer is started or restarted
  startTimer = () => {
    this.setState({
      // if timer is on
      timerOn: true,
      // total time the timer has been running since start/reset
      timerTime: this.state.timerTime,
      // time when the timer was started/past time
      timerStart: Date.now() - this.state.timerTime
    });
    // timer intervals
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTime = () => {
    this.setState({timerOn: false});
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
      </div>
    );
  }
}
export default Stopwatch;
