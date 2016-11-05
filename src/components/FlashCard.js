import React, { Component } from 'react';
import { connect } from 'react-redux';

import { correct, wrong } from '../actions/ScoreActions'

@connect(state => ({
  score:state.score
}),
dispatch => ({
  correct: correct
})
)
export default class FlashCard extends Component {
  constructor() {
    super();
    this.state = {
      card:{
        question:"Who is the next President of USA?",
        answers:["Monkey","Panda","Clinton","Trump"],
        correct:1
    }
  }
}

  render() {
    const { card } = this.state;
    const { score, dispatch } = this.props;
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
