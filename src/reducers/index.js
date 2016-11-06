import { combineReducers } from 'redux';
import score from './score'
import deck from './deck';
import decks from './decks';
// import AllQuestions from './AllQuestions';

export default combineReducers({
  score,
  deck,
  decks,
  // AllQuestions
});
