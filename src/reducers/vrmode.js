export default function vrmode(state = false, action) {
  console.log('action:', action);
  switch (action.type) {
    case 'ENABLE_VRMODE':
      return true;
    case 'DISABLE_VRMODE':
      return false;
    default: 
      return state;
  }
}
