import { combineReducers } from 'redux';
import card from './card';
import vrmode from './vrmode';
import score from './score'

export default combineReducers({ vrmode, score, card });
