import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as VRActions from '../actions/VRActions';

@connect()
export default class Root extends Component {
  constructor() {
    super();
    this._enableVR = this._enableVR.bind(this);
  }

  _enableVR() {
    const { dispatch } = this.props;
    dispatch(VRActions.enable());
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>A-Frame, React, Redux, Socket.io Template</h1>
        <button onClick={this._enableVR} className="btn btn-default">Enable VR</button>
        {this.props.children}
      </div>
    )
  }
}
