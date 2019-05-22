export const addMove = (coords, board)=> ({
  type: 'ADD_MOVE',
  coords,
  board,
});

export const addShuffleMoves = (moves) => ({
  type: 'ADD_SHUFFLE_MOVE',
  moves,
});