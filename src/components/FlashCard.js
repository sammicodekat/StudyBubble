import React, { Component } from 'react';
import { connect } from 'react-redux';

import { correct } from '../actions/ScoreActions'

@connect(state => ({
  score:state.score,
  deck:state.deck
  }),
  dispatch => ({
    correct(wrongCount) {
      dispatch(correct(wrongCount));
    }
  })
)
export default class FlashCard extends Component {
  constructor() {
    super();
    this.state = {
      wrongCount: 3,
      count: 0,
      endGame: false
    }
    this._wrongAnswer= this._wrongAnswer.bind(this);
    this._correctAnswer= this._correctAnswer.bind(this);
    this.deckFinished= this.deckFinished.bind(this);
  }

  _wrongAnswer() {
    const { wrongCount, count } = this.state;
    if(wrongCount === 0){
      console.log('count:', count);
      console.log('this.props.deck.questions.length:', this.props.deck.questions.length);
      if (count + 1 === this.props.deck.questions.length) {
        this.setState({ endGame: true });
      } else {
        this.setState({ count: count + 1, wrongCount: 3 })
      }
    } else {
      this.setState({ wrongCount: wrongCount-1 })
    }
  }

  _correctAnswer() {
    const { wrongCount, count } = this.state;
    if (count + 1 === this.props.deck.questions.length) {
      this.setState({ endGame: true });
    } else {
      this.setState({ count: count + 1, wrongCount: 3 });
    }
    this.props.correct(wrongCount);
  }

  deckFinished() {
    console.log('END GAME');
  }

  render() {
    console.log('this.state.count:', this.state.count);
    const { score, deck } = this.props;
    const { wrongCount, count, endGame } = this.state;
    if (endGame) {
      this.deckFinished();
    }
    let card = deck.questions[count];
    const { question, answers, correct } = card;

    let MultipleChoices = answers.map( (answer, i) => {
      if(i === correct){
        return (<button key={i} onClick={this._correctAnswer} className="btn btn-default" >{answer}</button>)
      } else {
        return (<button key={i} onClick={this._wrongAnswer} className="btn btn-default" >{answer}</button>)
      }
    })
    return (
      <div className='container'>
        <h1 className='text-center'>{score}</h1>
        <h1 className='text-center'>{question}</h1>
        {MultipleChoices}
      </div>
    )
  }
}
