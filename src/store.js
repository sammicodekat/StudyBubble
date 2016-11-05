import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import io from 'socket.io-client';
import reducer from './reducers';

const socket = io();

const middlewares = [
]

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

socket.on('action', action => {
  store.dispatch(action);
});

export default store;
