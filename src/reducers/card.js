import initialState from './initialState'
ftyff

export default function card(state = initialState.card, action) {
  switch (action.type) {
    case 'CORRECT':
      return state
    default:
      return state;
  }
}
