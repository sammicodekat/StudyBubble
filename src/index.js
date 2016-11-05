import 'aframe';
import 'aframe-text-component'; // 3d text
import 'aframe-bmfont-text-component'; // flat text

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Root from './components/Root';

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);
