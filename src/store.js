import { createStore, compose, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import reducer from './reducers';

const socket = io();

const middlewares = [

]

const store = createStore(reducer, compose(
  applyMiddleware(...middlewares)
));

socket.on('action', action => {
  store.dispatch(action);
});

export default store;
