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
    }

  }
  render() {

    return (
      <div className='container'>
        <h1>Decks</h1>
      </div>
    )
  }
}
