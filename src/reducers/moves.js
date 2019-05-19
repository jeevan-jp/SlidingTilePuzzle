const movesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVE':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default movesReducer;