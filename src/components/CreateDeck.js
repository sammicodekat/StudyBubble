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
      id: uuid(),
      question: Question1.value,
      answers: {
        a: Answer1A.value,
        b: Answer1B.value,
        c: Answer1C.value,
        d: Answer1D.value
      },
      correct: 'a'
    }
    let question2 = {
      id: uuid(),
      question: Question1.value,
      answers: {
        a: Answer2B.value,
        b: Answer2A.value,
        c: Answer2C.value,
        d: Answer2D.value
      },
      correct: 'b'
    }
    let deck = {
      id: uuid(),
      name: deckName.value,
      questions: [question1.id, question2.id]
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
            <textarea className="form-control" ref={`Answer${1}A`} rows="2"></textarea>
            <label>Incorrect Answer 1</label>
            <textarea className="form-control" ref={`Answer${1}B`} rows="2"></textarea>
            <label>Incorrect Answer 2</label>
            <textarea className="form-control" ref={`Answer${1}C`} rows="2"></textarea>
            <label>Incorrect Answer 3</label>
            <textarea className="form-control" ref={`Answer${1}D`} rows="2"></textarea>
          </div>
          <div className="form-group">
            <label>Question Name</label>
            <input type="text" className="form-control" ref={`Question${2}`} id="questionName" placeholder="Enter a Question"/>
            <label>Answer 1</label>
            <textarea className="form-control" ref={`Answer${2}A`} rows="2"></textarea>
            <label>Answer 2</label>
            <textarea className="form-control" ref={`Answer${2}B`} rows="2"></textarea>
            <label>Answer 3</label>
            <textarea className="form-control" ref={`Answer${2}C`} rows="2"></textarea>
            <label>Answer 4</label>
            <textarea className="form-control" ref={`Answer${2}D`} rows="2"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
