import { Entity } from 'aframe-react';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class ExitButton extends Component {
  constructor() {
    super();
    this._exit = this._exit.bind(this);
  }
  _exit() {
    browserHistory.push('/');
  }

  render() {
    return (
      <Entity
        onClick={this._exit}
        geometry={{ primitive: 'circle', radius: 0.7 }}
        material={{ shader: 'flat', color: 'red' }}
        rotation="-90 0 0"
        position={[0, 0.1, 0]}
      >
        <Entity bmfont-text={{ text: 'Go Home?', color: 'white' }} position={[-0.40, 0, 0.1]} />
      </Entity>
    );
  }

}
