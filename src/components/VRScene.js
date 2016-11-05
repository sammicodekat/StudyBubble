import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import Sky from './Sky'
import Score from './Score'
import Floor from './Floor'
import VrQuestion from './VrQuestion'
import VrAnswers from './VrAnswers'
import { correct, wrong } from '../actions/ScoreActions'

@connect(state => ({
  score: state.score,
  deck: state.deck,
  }),
  dispatch => ({
    correct(wrongCount) {
      dispatch(correct(wrongCount));
    }
  })
)

export default class VRScene extends Component {
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
    const { score, deck } = this.props;
    const { wrongCount, count, endGame } = this.state;

    if (endGame) {
      this.deckFinished();
    }
    let card = deck.questions[count];
    const { question, answers, correct } = card;

    return (
      <Scene>
        <Entity camera="userHeight: 1.6" look-controls>
          <a-cursor />
        </Entity>

        {/* <Entity light={{type: 'spot'}} position={[0, 2, -1]} /> */}

        <Floor src="url(./images/floor.jpeg)" />
        <Score score={score} />

        <VrQuestion question={question}  />
        <VrAnswers answers={answers} correct={correct} _correctAnswer={this._correctAnswer} _wrongAnswer={this._wrongAnswer}/>

        {/* <Sky /> */}
      </Scene>
    )
  }
}
