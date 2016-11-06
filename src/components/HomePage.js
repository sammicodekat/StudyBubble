import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect()
export default class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <h1>Study Bubble</h1>
      </div>
    )
  }
}
