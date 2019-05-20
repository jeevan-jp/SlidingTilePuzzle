const swapValues = (board, [a, b, x, y]) => {
  let temp = board[a][b];
  board[a][b] = board[x][y];
  board[x][y] = temp;
  return board;
}

const checkWin = (board) => {
  const winnerBoard = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];
  if (board.toString() === winnerBoard.toString()) {
    alert('you win');
  }
}

// following function returns only shuffled board not row, column
const ShuffleBoard = (board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']]) => {
  let count = 0;
  let row1, col1, row2, col2;
  while(count < 50) {
    row1 = Math.floor(Math.random() * 4);
    col1 = Math.floor(Math.random() * 4);
    row2 = Math.floor(Math.random() * 4);
    col2 = Math.floor(Math.random() * 4);
    if(row1 !== row2 || col1 !== col2) {
      board = swapValues(board, [row1, col1, row2, col2]);
      count++;
    }
  }
  return board;
}

const findEmptyTile = (board) => {
  let row = 0;
  const column = board.filter((arr, i) => {
    row = i;
    return  arr.includes("");
  })[0].indexOf("");

  return [row, column];
}

export { swapValues, checkWin, ShuffleBoard, findEmptyTile };