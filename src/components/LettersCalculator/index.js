import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  getLettersCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="phrase" htmlFor="phraseInput">
              Enter the phrase
            </label>
            <input
              placeholder="Enter the Phrase"
              className="phrase-input"
              onChange={this.getLettersCount}
              id="phraseInput"
            />
            <p className="letters-count">No.of letters: {count}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image-calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
