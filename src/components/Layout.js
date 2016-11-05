import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashCard from './FlashCard'

@connect()
export default class Root extends Component {
  constructor() {
    super();
    // this._enableVR = this._enableVR.bind(this);
  }

  // _enableVR() {
  //   const { dispatch } = this.props;
  //   dispatch(VRActions.enable());
  // }

  render() {
    return (
      <div className='container'>
        <FlashCard />
        {/* <button onClick={this._enableVR} className="btn btn-default">Enable VR</button> */}
        {this.props.children}
      </div>
    )
  }
}
