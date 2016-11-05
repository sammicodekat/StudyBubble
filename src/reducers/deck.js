import initialState from './initialState'

export default function score(state = initialState.deck, action) {
  switch (action.type) {
    // case 'DECK_ADD':
    //   return [...state, action.payload];
    default:
      return state;
  }
}
