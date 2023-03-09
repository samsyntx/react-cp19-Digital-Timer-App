import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {startTime: '25:00'}

  pressPlusButton = () => {
    const {startTime} = this.state
    const splitWithColanTime = startTime.split(':')
    if (splitWithColanTime[0] < 59) {
      const minutesInInt = parseInt(splitWithColanTime[0])
      const icreasingMinuts = minutesInInt + 1
      const combineMinAndPrevSec = `${icreasingMinuts}:${splitWithColanTime[1]}`
      this.setState({startTime: combineMinAndPrevSec})
    }
  }

  pressMinusButton = () => {
    const {startTime} = this.state
    const splitWithColanTime = startTime.split(':')
    if (splitWithColanTime[0] > 1) {
      const minutesInInt = parseInt(splitWithColanTime[0])
      const icreasingMinuts = minutesInInt - 1
      const combineMinAndPrevSec = `${icreasingMinuts}:${splitWithColanTime[1]}`
      this.setState({startTime: combineMinAndPrevSec})
    }
  }

  render() {
    const {startTime} = this.state
    return (
      <div className="main-bg-container">
        <h1 className="main-container-heading">digital Timer</h1>
        <div className="main-content-flex-container">
          <div className="watch-container">
            <div className="timer-container">
              <div className="timer-bg-content">
                <h1 className="main-25-timer-heading">{startTime}</h1>
                <p className="main-25-timer-paragraph">Running</p>
              </div>
            </div>
          </div>
          <div className="start-pause-container">
            <div className="start-pause-reset-buttons-container">
              <button type="button" className="start-pause-reset-button">
                <img
                  className="start-pause-button-icon"
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="trial"
                />
                <p>Start</p>
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
              <p className="less-increase-time-25">25</p>
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
