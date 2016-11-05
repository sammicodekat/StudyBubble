export default function score(state = 0, action) {
  switch (action.type) {
    case 'CORRECT':
    return state + 1;
    case "WRONG":
    return state - 1;
    default:
    return state;
  }
}
