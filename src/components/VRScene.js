import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import Sky from './Sky'
import Score from './Score'
import Floor from './Floor'

@connect(state => ({
  score: 5
}))
export default class VRScene extends Component {
  render() {
    // const { score } = this.state
    return (
      <Scene>
        <Entity camera='userHeight: 1.6' look-controls>
          <a-cursor />
        </Entity>

        {/* <Entity light={{type: 'spot'}} position={[0, 0, -3]} /> */}

        <Floor />
          <Score score={5}/>
        
        {/* <Sky /> */}
      </Scene>
    )
  }
}
