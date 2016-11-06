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
export default class DecksView extends Component {
  constructor() {
    super();

  }
  render() {
    const { deck } = this.props;

    return (
      <div className='container'>
        <div className="row">
          <h1>{deck.name}</h1>
        </div>
      </div>
    )
  }
}
