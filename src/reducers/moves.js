const movesReducer = (state = [], action) => {
  const { coords, board } = action;
  switch (action.type) {
    case 'ADD_MOVE':
      return [...state, {coords, board}];
    default:
      return state;
  }
}

export default movesReducer;