import { combineReducers } from 'redux';
import card from './card';
import score from './score'
// import deck from './deck';
// import AllQuestions from './AllQuestions';

export default combineReducers({
  score,
  card,
  // deck,
  // AllQuestions
});
