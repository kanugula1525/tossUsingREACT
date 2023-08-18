// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
    totalTossCount: 0,
  }

  onclickToss = () => {
    this.setState(prevState => ({totalTossCount: prevState.totalTossCount + 1}))
    const toss = ['heads', 'tails']
    const result = toss[Math.floor(Math.random() * toss.length)]
    console.log(result)
    // console.log(num)
    if (result === 'heads') {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else if (result === 'tails') {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {tossImage, headsCount, tailsCount, totalTossCount} = this.state
    return (
      <div className="mainContainer">
        <div className="miniContainer">
          <h1 className="title">Coin Toss Game</h1>
          <p className="tossCaption">Heads (or) Tails</p>
          <img className="tossImage" src={tossImage} alt="toss result" />
          <button
            onClick={this.onclickToss}
            className="tossButton"
            type="button"
          >
            Toss Coin
          </button>
          <div className="counterContainer">
            <p className="tossCount">Total: {totalTossCount}</p>
            <p className="tossCount">Heads: {headsCount}</p>
            <p className="tossCount">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
