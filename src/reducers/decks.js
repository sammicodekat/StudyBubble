import initialState from './initialState'

export default function score(state = initialState.decks, action) {
  switch (action.type) {
    case 'DECK_ADD':
      console.log('action.payload:', JSON.stringify(action.payload));
      return [...state, action.payload];
    default:
      return state;
  }
}
