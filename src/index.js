import 'aframe';
import 'aframe-text-component'; // 3d text
import 'aframe-bmfont-text-component'; // flat text

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';
import Root from './components/Root';

import Layout from './components/Layout';
import CreateDeck from './components/CreateDeck';

render(
  <Provider store={store}>
    {/* <Root/> */}
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={CreateDeck} />
        <Route path='/add' component={CreateDeck} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
