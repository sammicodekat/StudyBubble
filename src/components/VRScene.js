import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import 'aframe-animation-component';
import { connect } from 'react-redux';
import Sky from './Sky'
import ExitButton from './ExitButton'
import Score from './Score'
import Floor from './Floor'

import Messages from './Messages'
import VrQuestion from './VrQuestion'
import VrAnswers from './VrAnswers'
import { correct, wrong } from '../actions/ScoreActions'

import Room from './Room'


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

      <Scene fog={{type: 'exponential', density: 0.01, color: 'white'}}>
        <Entity sound="src: url(./music.mp3); autoplay: true; volume:1"></Entity>

        <Entity camera='userHeight: 1.6' look-controls>
          <a-cursor cursor={{ fuse: 'true', fuseTimeout: '2000' }}>

            <a-animation begin="click" easing="ease-in" attribute="scale"
              fill="forwards" from="7 7 7" to="1 1 1" dur="1000"
            />
            <a-animation begin="click" easing="ease-in" attribute="scale"
              fill="forwards" from="0.01 0.01 0.01" to="7 7 7" dur="500"
            />
          </a-cursor>
        </Entity>

        <Floor />
        <Score score={score} position={[7, 1, 0]} rotation={[0, -90, 0]} />
        <Score score={score} position={[-7, 1, 0]} rotation={[0, 90, 0]} />

        {/* <Messages /> */}
        <VrQuestion question={question}  />
        <VrAnswers answers={answers} correct={correct} _correctAnswer={this._correctAnswer} _wrongAnswer={this._wrongAnswer}/>

        <Entity className="sun"
        geometry={{primitive: 'sphere', radius: 3}}
        material={{shader: 'flat', color: 'orange'}}
        position={[-30, 70, 50]}/>

        <Sky />
        <ExitButton/>
      </Scene>
    )
  }
}
