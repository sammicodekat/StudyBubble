import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import * as QuestionActions from '../actions/QuestionActions';
import * as DeckActions from '../actions/DeckActions';

@connect(
  (state) => ({
  }),
  (dispatch) => ({
    addDeck (deck) {
      dispatch(DeckActions.addDeck(deck));
    },
    addQuestion (question) {
      dispatch(QuestionActions.addQuestion(question));
    }
  })
)
export default class CreateDeck extends Component {
  constructor() {
    super();

    this.state = {
      questionsCount: 1
    }

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    let { deckName, Question1, Answer1A, Answer1B, Answer1C, Answer1D, Question2, Answer2A, Answer2B, Answer2C, Answer2D } = this.refs;
    let question1 = {
      answers: [Answer1A.value, Answer1B.value, Answer1C.value, Answer1D.value],
      id: uuid(),
      question: Question1.value,
      correct: 0
    }
    let question2 = {
      answers: [Answer2B.value, Answer2A.value, Answer2C.value, Answer2D.value],
      id: uuid(),
      question: Question2.value,
      correct: 1
    }
    let deck = {
      id: uuid(),
      name: deckName.value,
      questions: [question1, question2]
    }

    // this.props.addQuestion(question1);
    // this.props.addQuestion(question2);
    this.props.addDeck(deck);
  }

  render() {
    let { questionsCount } = this.state;
    return (
      <div className='container'>
        <h1 className='text-center'>Create A New Deck</h1>
        <form onSubmit={this._onSubmit}>
          <div className="form-group">
            <label>Deck Name</label>
            <input type="text" className="form-control" ref="deckName" id="deckName" placeholder="Enter Deck Name"/>
            <small className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${1}`} id="questionName" placeholder="Enter a Question"/>
            <label>Correct Answer</label>
            <input className="form-control" ref={`Answer${1}A`} rows="2"></input>
            <label>Incorrect Answer 1</label>
            <input className="form-control" ref={`Answer${1}B`} rows="2"></input>
            <label>Incorrect Answer 2</label>
            <input className="form-control" ref={`Answer${1}C`} rows="2"></input>
            <label>Incorrect Answer 3</label>
            <input className="form-control" ref={`Answer${1}D`} rows="2"></input>
          </div>
          <div className="form-group">
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${2}`} id="questionName" placeholder="Enter a Question"/>
            <label>Answer 1</label>
            <input className="form-control" ref={`Answer${2}A`} rows="2"></input>
            <label>Answer 2</label>
            <input className="form-control" ref={`Answer${2}B`} rows="2"></input>
            <label>Answer 3</label>
            <input className="form-control" ref={`Answer${2}C`} rows="2"></input>
            <label>Answer 4</label>
            <input className="form-control" ref={`Answer${2}D`} rows="2"></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
