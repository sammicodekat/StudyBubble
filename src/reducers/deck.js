import initialState from './initialState'

export default function score(state = initialState.deck, action) {
  switch (action.type) {
    case 'SET_CURRENT_DECK':
      return action.payload;
    default:
      return state;
  }
}
