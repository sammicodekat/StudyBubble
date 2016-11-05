import React, { Component } from 'react';
import { connect } from 'react-redux';

import { correct, wrong } from '../actions/ScoreActions'

@connect(state => ({
  score:state.score,
  card:state.card
}),
dispatch => ({

})
)
export default class FlashCard extends Component {
  constructor() {
    super();
    this.state = {
      wrongCount: 0
    }
  }

  _checkWrong(){

  }

  render() {
    const { score, dispatch, card } = this.props;
    const { wrongCount } = this.state;
    const { question,answers,correct } = card;
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
