import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    stateMinutes: 25,
    stateSeconds: 0,
    timerRunning: false,
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  intervalCallBackFunToUpdateSec = () => {
    const {stateMinutes, stateSeconds} = this.state
    if (stateMinutes > 0 && stateSeconds > 0) {
      this.setState(prevState => ({
        stateSeconds: prevState.stateSeconds - 1,
      }))
    } else if (stateMinutes > 0 && stateSeconds === 0) {
      this.setState(prevState => ({
        stateMinutes: prevState.stateMinutes - 1,
        stateSeconds: 59,
      }))
    } else if (stateMinutes === 0 && stateSeconds > 0) {
      this.setState(prevState => ({
        stateSeconds: prevState.stateSeconds - 1,
      }))
    } else if (stateMinutes === 0 && stateSeconds !== 0) {
      this.setState(prevState => ({
        stateMinutes: prevState.stateMinutes - 1,
        stateSeconds: 59,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({
        timerRunning: false,
      })
    }
    console.log('Callback Function')
  }

  funToRunIntervalPlayButton = () => {
    this.setState({timerRunning: true})
    this.timerId = setInterval(this.intervalCallBackFunToUpdateSec, 1000)
    console.log('Play Button')
  }

  funToClearIntervalPausedButton = () => {
    clearInterval(this.timerId)
    this.setState({timerRunning: false})
  }

  pressPlusButton = () => {
    const {stateMinutes} = this.state
    if (stateMinutes < 59) {
      const increasingMinute = stateMinutes + 1
      this.setState({
        stateMinutes: increasingMinute,
      })
    }
  }

  pressMinusButton = () => {
    const {stateMinutes} = this.state
    if (stateMinutes > 0) {
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
        Pause
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
        Start
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
                disabled={timerRunning}
              >
                -
              </button>
              <div>
                <p className="less-increase-time-25">Hnji</p>
              </div>
              <button
                onClick={this.pressPlusButton}
                type="button"
                className="time-increase-less-button"
                disabled={timerRunning}
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
