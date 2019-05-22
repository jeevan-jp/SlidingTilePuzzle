const movesReducer = (moves = [], action) => {
  switch (action.type) {
    case 'ADD_MOVE':
      const { coords, board } = action;
      return [...moves, { coords, board }];
    case 'RESET':
      return [];
    default:
      return moves;
  }
}

export default movesReducer;