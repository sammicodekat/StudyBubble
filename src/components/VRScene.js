import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';

@connect()
export default class VRScene extends Component {
  render() {
    return (
      <Scene>
        <Entity text={{text: 'Hello World!'}} material={{color: 'green'}} position={[0, 2, -5]}></Entity>
      </Scene>
    )
  }
}
