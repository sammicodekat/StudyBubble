import React, { Component } from 'react';
import { connect } from 'react-redux';

import { correct, wrong } from '../actions/ScoreActions'

@connect(state => ({
  score: state.score,
  card: state.card
  }),
  // dispatch => ({
  //   correct() {
  //     dispatch(correct());
  //   },
  //   wrong() {
  //     dispatch(wrong());
  //   }
  // })
)
export default class FlashCard extends Component {
  constructor() {
    super();
    this.state = {
      wrongCount: 0
    }
    this._checkWrong= this._checkWrong.bind(this);
  }

  _checkWrong(){
  const { wrongCount } = this.state;
  if(wrongCount === 3){

  }else{
    this.setState({
      wrongCount:wrongCount+1
    })
  }
  }

  render() {
    const { score, dispatch, card } = this.props;
    const { wrongCount } = this.state;
    const { question,answers,correct } = card;
    console.log('answers',answers);
    let MultipleChoices = answers.map( (answer,i) => {
      if(i === correct){
        return (<button onClick={()=> dispatch(correct())} className="btn btn-default" >{answer}</button>)
      }else{
        return (<button onClick={()=> dispatch(wrong())} className="btn btn-default" >{answer}</button>)
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
