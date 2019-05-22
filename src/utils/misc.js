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

const findCoordsOfEmptyTile = (board) => {
  let row = 0;

  const array = board.filter((arr, i) => {
    if(arr.includes("")) {
      row = i;
    }
    return  arr.includes("");
  });
  
  const column = array[0].indexOf("");

  return [row, column];
}

const makeShuffleMoves = () => {
  let board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];

  const random = Math.random();
  const MaxCount = Math.floor((random > 0.22 ? random : 0.44)*100);
  let count = 0;

  const shuffleMoves = [];
  let [row, column] = [3,3];

  while(count < MaxCount) {
    const move = Math.floor(Math.random() * 4);

    switch(move) {
      case 0:       // move up
        if(row > 0) {
          const coords = [row, column, row-1, column];
          row = row-1;
          board = swapValues(board, coords);
          shuffleMoves.push({ board, coords });
          count++;
        }
        break;
      
      case 1:       // move right
        if(column < 3) {
          const coords = [row, column, row, column+1];
          row = column+1;
          board = swapValues(board, coords);
          shuffleMoves.push({ board, coords });
          count++;
        }
        break;
      
      case 2:       // move down
        if(row < 3) {
          const coords = [row, column, row+1, column];
          row = row+1;
          board = swapValues(board, coords);
          shuffleMoves.push({ board, coords });
          count++;
        }
        break;

      case 3:       // move left
        if(column > 0) {
          const coords = [row, column, row, column-1];
          row = column-1;
          board = swapValues(board, coords);
          shuffleMoves.push({ board, coords });
          count++;
        }
        break;
      
      default:
        break;
    }
  }
  return shuffleMoves;
}

export { swapValues, checkWin, findCoordsOfEmptyTile, makeShuffleMoves };