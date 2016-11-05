import initialState from './initialState'

export default function score(state = initialState.card, action) {
  switch (action.type) {
    case 'CORRECT':
      return state;
    case "WRONG":
      return state;
    default:
      return state;
  }
}
