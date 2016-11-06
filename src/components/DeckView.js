import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

@connect(
  (state) => ({
    deck: state.deck
  }),
  (dispatch) => ({

  })
)
export default class DeckView extends Component {
  constructor() {
    super();

  }
  render() {
    const { deck } = this.props;

    let Questions = deck.questions.map((q, i) => (
      <div key={i}>
        <h3>{q.question}</h3>
      </div>
    ))

    return (
      <div className='container'>
        <div className="row">
          <h1>{deck.name}</h1>
          <button className="btn btn-default" onClick={() => browserHistory.push(`/vr`)}>Enter the Bubble</button>
          {Questions}
        </div>
      </div>
    )
  }
}
