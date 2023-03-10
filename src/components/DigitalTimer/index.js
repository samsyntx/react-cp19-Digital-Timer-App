import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {stateMinutes: 25, stateSeconds: 0, timerRunning: false}

  toggleRunningState = () => {
    this.setState(prevState => ({timerRunning: !prevState.timerRunning}))
    this.timerId = setInterval(() => this.intervalCallBackFun, 1000)
  }

  pressPlusButton = () => {
    const {stateMinutes, timerRunning} = this.state
    if (stateMinutes < 59 && timerRunning === false) {
      const increasingMinute = stateMinutes + 1
      this.setState({
        stateMinutes: increasingMinute,
      })
    }
  }

  pressMinusButton = () => {
    const {stateMinutes, timerRunning} = this.state
    if (stateMinutes > 0 && timerRunning === false) {
      const decreasingMinute = stateMinutes - 1
      this.setState({
        stateMinutes: decreasingMinute,
      })
    }
  }

  render() {
    const {stateMinutes, stateSeconds, timerRunning} = this.state

    const pauseStartIconText = timerRunning
      ? {
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png',
          altText: 'pause icon',
          displayText: 'Running',
        }
      : {
          imageUrl:
            'https://assets.ccbp.in/frontend/react-js/play-icon-img.png',
          altText: 'play icon',
          displayText: 'Paused',
        }

    const formattedMinutes =
      stateMinutes < 10 ? `0${stateMinutes}` : stateMinutes
    const formattedSeconds =
      stateSeconds < 10 ? `0${stateSeconds}` : stateSeconds

    return (
      <div className="main-bg-container">
        <h1 className="main-container-heading">digital Timer</h1>
        <div className="main-content-flex-container">
          <div className="watch-container">
            <div className="timer-container">
              <div className="timer-bg-content">
                <h1 className="main-25-timer-heading">{`${formattedMinutes}:${formattedSeconds}`}</h1>
                <p className="main-25-timer-paragraph">
                  {pauseStartIconText.displayText}
                </p>
              </div>
            </div>
          </div>
          <div className="start-pause-container">
            <div className="start-pause-reset-buttons-container">
              <button
                onClick={this.toggleRunningState}
                type="button"
                className="start-pause-reset-button"
              >
                <img
                  className="start-pause-button-icon"
                  src={pauseStartIconText.imageUrl}
                  alt={pauseStartIconText.altText}
                />
                <p>{timerRunning ? 'Pause' : 'Start'}</p>
              </button>
              <button type="button" className="start-pause-reset-button">
                <img
                  className="start-pause-button-icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p>Reset</p>
              </button>
            </div>
            <p className="set-timer-limit-paragraph">Set Timer Limit</p>
            <div className="time-increase-less-button-container">
              <button
                onClick={this.pressMinusButton}
                type="button"
                className="time-increase-less-button"
              >
                -
              </button>
              <p className="less-increase-time-25">{formattedMinutes}</p>
              <button
                onClick={this.pressPlusButton}
                type="button"
                className="time-increase-less-button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
