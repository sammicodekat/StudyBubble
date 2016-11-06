import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import Sky from './Sky'
import Score from './Score'
import Floor from './Floor'
import Room from './Room'

@connect(state => ({
  score: state.score
}))
export default class VRScene extends Component {
  render() {
    const { score } = this.props

    return (
      <Scene fog={{type: 'exponential', density: 0.01, color: '#f4fcff'}}>
        <Entity camera='userHeight: 1.6' look-controls>
          <a-cursor />
        </Entity>

        <Floor src="url(./images/floor.jpeg)"/>
        <Score score={score}/>

        <Entity className="sun"
        geometry={{primitive: 'sphere', radius: 3}}
        material={{shader: 'flat', color: 'orange'}}
        position={[-30, 70, 10]}/>

        <Entity className="question"
        geometry={{primitive: 'plane', width: 2, height: 1}}
        material={{color: 'grey'}}
        position={[0, 1, -2]}
        rotation={[-5, 0, 0]} />

        <Entity className="question"
        geometry={{primitive: 'plane', width: 2, height: 1}}
        material={{color: 'grey'}}
        position={[0, 1, 3]}
        rotation={[-5, 180, 0]} />

        <Sky />
      </Scene>
    )
  }
}
