import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import uuid from 'uuid';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import * as DeckActions from '../actions/DeckActions';

@connect(
  (state) => ({
    deck: state.deck,
    decks: state.decks
  }),
  (dispatch) => ({
    setCurrentDeck(deck) {
      dispatch(DeckActions.setCurrentDeck(deck))
    }
  })
)
export default class DecksPage extends Component {
  constructor() {
    super();

    this.state = {
    }

  }
  render() {
    const { decks, setCurrentDeck } = this.props;

    let Decks = '';
    if (decks) {
      Decks = decks.map((d) => {
        return (
          // <div key={d.id} className="deck" onClick={() => {
          //   setCurrentDeck(d);
          //   browserHistory.push(`/deck/${d.id}`)
          // }}>
          //   <h3>{d.name}</h3>
          //   <h4>{d.description}</h4>
          // </div>
          <div key={d.id}>
            <Card>
              <CardHeader
                title={d.name}
                subtitle={d.description}
                // subtitle={d.description}
                // actAsExpander={true}
                // showExpandableButton={true}
                className='card'
              />
              <CardActions>
                <FlatButton label="Enter this Bubble" onClick={() => {
                  setCurrentDeck(d);
                  browserHistory.push(`/vr`)
                }}/>
                <FlatButton label="More Info" onClick={() => {
                  setCurrentDeck(d);
                  browserHistory.push(`/deck/${d.id}`)
                }}/>
              </CardActions>
              <CardText expandable={true}>
              </CardText>
            </Card>
          </div>
        );
      });
    }

    return (
      <div className='container'>
        <div className="row">
          <h1 className='text-center'>Decks</h1>
          {Decks}
        </div>
      </div>
    )
  }
}
