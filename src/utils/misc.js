const swapValues = (board, [a, b, x, y]) => {
  let temp = board[a][b];
  board[a][b] = board[x][y];
  board[x][y] = temp;
  return board;
}

const checkWin = (board) => {
  const winnerBoard = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];
  if (board.toString() === winnerBoard.toString()) {
    console.log('you win');
  }
}

const ShuffleBoard = (board) => {
  let count = 0;
  while(count < 50) {
    const row1 = Math.floor(Math.random() * 3);
    const col1 = Math.floor(Math.random() * 3);
    const row2 = Math.floor(Math.random() * 3);
    const col2 = Math.floor(Math.random() * 3);
    if(row1 !== row2 || col1 !== col2) {
      board = swapValues(board, [row1, col1, row2, col2]);
      count++;
    }
  }
  return board;
}

export { swapValues, checkWin, ShuffleBoard };