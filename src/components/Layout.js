import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashCard from './FlashCard';
import NavBar from './NavBar';

@connect()
export default class Root extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}
