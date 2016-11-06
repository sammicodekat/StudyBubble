import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Tabs, Tab } from 'material-ui';
import { browserHistory } from 'react-router';

@connect()
export default class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span id='appBarIcon'><img src="./favicon.png"/> Study Bubble</span>}
          className="AppBar"
          showMenuIconButton={false}
        >
          <Tabs>
            <Tab className="Tab" label="Home" onClick={() => browserHistory.push('/')} />
            <Tab className="Tab" label="Decks" onClick={() => browserHistory.push('/decks')} />
            <Tab className="Tab" label="Add" onClick={() => browserHistory.push('/add')} />
          </Tabs>
        </AppBar>
      </div>
    )
  }
}
