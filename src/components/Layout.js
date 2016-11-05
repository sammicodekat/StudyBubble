import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashCard from './FlashCard'

@connect()
export default class Root extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}
