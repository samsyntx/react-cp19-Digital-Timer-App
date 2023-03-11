import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {stateMinutes: 25, stateSeconds: 0, timerRunning: false}

  intervalCallBackFun = () => {
    const {stateMinutes, stateSeconds} = this.state
    if (stateMinutes === 0 && stateSeconds === 0) {
      clearInterval(this.timerId)
      this.setState({stateMinutes: 0, stateSeconds: 0, timerRunning: false})
    } else if (stateSeconds === 0) {
      this.setState(prevState => ({
        stateMinutes: prevState.stateMinutes - 1,
        stateSeconds: 59,
      }))
    } else {
      this.setState(prevState => ({stateSeconds: prevState.stateSeconds - 1}))
    }
    console.log('Callback Function Called')
  }

  funToRunIntervalPlayButton = () => {
    const {stateMinutes, stateSeconds} = this.state
    console.log(stateMinutes, stateSeconds)
    if (stateMinutes > 0 || stateSeconds > 0) {
      this.setState({timerRunning: true})
      this.timerId = setInterval(this.intervalCallBackFun, 1000)
    }
  }

  funToClearIntervalPausedButton = () => {
    clearInterval(this.timerId)
    this.setState({timerRunning: false})
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

  resetButtonClicked = () => {
    clearInterval(this.timerId)
    this.setState({stateMinutes: 25, stateSeconds: 0, timerRunning: false})
    console.log('Reset Button Pressed')
  }

  render() {
    const {stateMinutes, stateSeconds, timerRunning} = this.state

    const toggleButtonStartAndPaused = timerRunning ? (
      <button
        onClick={this.funToClearIntervalPausedButton}
        type="button"
        className="start-pause-reset-button"
      >
        <img
          className="start-pause-button-icon"
          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
          alt="pause icon"
        />
        <p>Paused</p>
      </button>
    ) : (
      <button
        onClick={this.funToRunIntervalPlayButton}
        type="button"
        className="start-pause-reset-button"
      >
        <img
          className="start-pause-button-icon"
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
          alt="play icon"
        />
        <p>Play</p>
      </button>
    )

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
                  {timerRunning ? 'Running' : 'Paused'}
                </p>
              </div>
            </div>
          </div>
          <div className="start-pause-container">
            <div className="start-pause-reset-buttons-container">
              {toggleButtonStartAndPaused}
              <button
                onClick={this.resetButtonClicked}
                type="button"
                className="start-pause-reset-button"
              >
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
