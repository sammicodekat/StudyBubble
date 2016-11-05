import initialState from './initialState'

export default function score(state = initialState.score, action) {
  switch (action.type) {
    case 'CORRECT':
      return state + action.payload;
    case "WRONG":
      return state;
    default:
      return state;
  }
}
