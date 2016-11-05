import 'aframe';
import 'aframe-text-component'; // 3d text
import 'aframe-bmfont-text-component'; // flat text

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';

import Layout from './components/Layout';
import CreateDeck from './components/CreateDeck';
import VRScene from './components/VRScene';
import FlashCard from './components/FlashCard';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={CreateDeck} />
        <Route path='/add' component={CreateDeck} />
        <Route path='/vr' component={VRScene} />
        <Route path='/flashcard' component={FlashCard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
