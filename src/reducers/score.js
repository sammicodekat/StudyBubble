import initialState from './initialState'

export default function score(state = initialState.score, action) {
  switch (action.type) {
    case 'CORRECT':
    return state + 1;
    case "WRONG":
    return state - 1;
    default:
    return state;
  }
}
