import React, { Component } from 'react';
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};
class PlayNumber extends Component {
  render() {
    return <button className="number"
      style={{ backgroundColor: colors[this.props.status] }}
      onClick={() => this.props.onClick(this.props.number, this.props.status)}
    >{this.props.number}</button>
  }
}
class Star extends Component {
  render() {
    return utils.range(1, this.props.countstar).map(e => <div className="star" key={e} />)
  }
}
class PlayAgain extends Component {
  render() {
    return (
      <div className='text-center'>
        {this.props.gameStatus === 'won' ? <div className='star-status win'>Winner Winer Chicken Dinner</div> : ''}
        {this.props.gameStatus === 'lose' ? <div className='star-status lose'>Game Over</div> : ''}
        <button onClick={()=> this.props.onClick()}> {this.props.gameStatus === 'play' ? 'Play' : 'Play Again'}</button>
      </div>
    )
  }
}
class StarGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: utils.random(1, 9),
      timmer: 10,
      availableNums: utils.range(1, 9),
      candiateNums: [],
      played: false
    };
  
    this.numberStatus = this.numberStatus.bind(this)
    this.numberClick = this.numberClick.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }
  resetGame(){
    this.setState({
      star: utils.random(1, 9),
      timmer: 10,
      availableNums: utils.range(1, 9),
      candiateNums: [],
      played: true
    })
    this.timeGame()
  }
  gameStatus(){
    if(!this.state.played){
      return 'play';
    }
    return this.state.availableNums.length === 0 ? 'won' : this.state.timmer === 0 ? 'lose' : 'active';
  }
  cadidateAreWrong(){
    return utils.sum(this.state.candiateNums) > this.state.star
  }
  numberStatus(number) {
    const cadidateAreWrong = this.cadidateAreWrong()
    if (!this.state.availableNums.includes(number)) {
      return 'used'
    }
    if (this.state.candiateNums.includes(number)) {
      return cadidateAreWrong ? 'wrong' : 'candidate';
    }
    return 'available'
  }
  numberClick(number, status) {
    if (status === 'used') {
      return;
    }
    const newCandidateNums = status === 'available' ? this.state.candiateNums.concat(number) : this.state.candiateNums.filter(cn => cn !== number)
    if (utils.sum(newCandidateNums) !== this.state.star) {
      this.setState({ candiateNums: newCandidateNums })
    } else {
      const newAvailableNums = this.state.availableNums.filter(
        n => !newCandidateNums.includes(n)
      )
      this.setState({ star: utils.randomSumIn(newAvailableNums, 9), availableNums: newAvailableNums, candiateNums: [], })
    }

  }
  timeGame(){
    const setTime = setInterval(()=>{
      console.log(this.gameStatus())
      if(this.gameStatus() === 'won' || this.state.timmer === 0){
        clearInterval(setTime)
        return;
      }
      this.setState({timmer: this.state.timmer - 1})
    },1000)
  }

  componentDidUpdate() {
 
  }
  componentDidMount() {
   
  }
  render() {
    return (
      <>
        <div className="game">
          <div className="help">
            Pick 1 or more numbers that sum to the number of stars
          </div>
          <div className="body">
            <div className="left">
              {this.state.availableNums.length !== 0 && this.state.played && this.gameStatus() === 'active' ? <Star countstar={this.state.star} /> :
               <PlayAgain countstar={this.state.star} onClick={this.resetGame} gameStatus={this.gameStatus()} />}
              
            </div>
            <div className="right">
              {utils.range(1, 9).map(e => <PlayNumber key={e} number={e} status={this.numberStatus(e)} onClick={this.numberClick} />)}
            </div>
          </div>
          <div className="timer">Time Remaining: {this.state.timmer}</div>
        </div>

      </>

    )
  }
}

export default StarGame;