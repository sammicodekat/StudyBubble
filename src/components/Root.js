import React, { Component } from 'react';
import VRScene from './VRScene';
import Layout from './Layout';
import { connect } from 'react-redux';

@connect(state => ({
  vrmode: state.vrmode
}))
export default class Root extends Component {
  render() {
    const { vrmode } = this.props;

    if (vrmode) {
      return <VRScene />;
    } else {
      return <Layout />;
    }
  }
}
