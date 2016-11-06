import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import io from 'socket.io-client';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';


const socket = io();

const middlewares = [
]

const store = createStore(reducer, loadState(), composeWithDevTools(
  applyMiddleware(...middlewares)
));

store.subscribe(() => {
  store.getState();
});

socket.on('action', (action) => {
  store.dispatch(action);
});

export default store;
