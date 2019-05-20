const timerReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'RESET_TIMER':
      return 0;
    default:
      return state;
  }
}

export default timerReducer;