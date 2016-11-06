import 'aframe';
import 'aframe-text-component'; // 3d text
import 'aframe-bmfont-text-component'; // flat text

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CreateDeck from './components/CreateDeck';
import VRScene from './components/VRScene';
import FlashCard from './components/FlashCard';
import DecksPage from './components/DecksPage';
import DeckView from './components/DeckView';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/vr' component={VRScene} />
      <Route path='/' component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path='/decks' component={DecksPage} />
        <Route path='/deck/:id' component={DeckView} />
        <Route path='/add' component={CreateDeck} />
        <Route path='/flashcard' component={FlashCard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
