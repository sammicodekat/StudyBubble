import { combineReducers } from 'redux';
import card from './card';
import vrmode from './vrmode';
import score from './score'
// import deck from './deck';
// import AllQuestions from './AllQuestions';

export default combineReducers({
  vrmode,
  score,
  card,
  // deck,
  // AllQuestions
});
