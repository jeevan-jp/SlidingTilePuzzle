const shuffle = (oldShuffleMoves = [], action) => {
  switch(action.type) {
    case 'ADD_SHUFFLE_MOVE':
      return [...action.moves];
    case 'RESET_SHUFFLE':
      return [];
    default:
      return oldShuffleMoves;
  }
}

export default shuffle;