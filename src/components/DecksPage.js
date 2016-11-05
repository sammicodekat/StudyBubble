import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import uuid from 'uuid';

import * as DeckActions from '../actions/DeckActions';

@connect(
  (state) => ({
    deck: state.deck,
    decks: state.decks
  }),
  (dispatch) => ({

  })
)
export default class DecksPage extends Component {
  constructor() {
    super();

    this.state = {
    }

  }
  render() {
    const { decks } = this.props;

    let Decks = '';
    if (decks) {
      Decks = decks.map((d) => {
        return (
          <div key={d.id} className="deck" onClick={() => browserHistory.push(`/deck/${d.id}`)}>
            <h3>{d.name}</h3>
            <h4>{d.description}</h4>
          </div>
        );
      });
    }

    return (
      <div className='container'>
        <div className="row">
          <h1>Decks</h1>
          {Decks}
        </div>
      </div>
    )
  }
}
