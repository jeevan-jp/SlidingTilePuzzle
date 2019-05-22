const swapValues = (gameBoard, [a, b, x, y]) => {
  let temp = gameBoard[a][b];
  gameBoard[a][b] = gameBoard[x][y];
  gameBoard[x][y] = temp;
  return gameBoard;
}

const checkWin = (board) => {
  const winnerBoard = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];
  if (board.toString() === winnerBoard.toString()) {
    alert('you win');
  }
}

const findCoordsOfEmptyTile = (b) => {
  let row = 0;

  const array = b.filter((arr, i) => {
    if(arr.includes("")) {
      row = i;
    }
    return  arr.includes("");
  });
  
  const column = array[0].indexOf("");

  return [row, column];
}

const makeShuffleMoves = () => {
  let newBoard = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];

  const random = Math.random();
  const MaxCount = Math.floor((random > 0.22 ? random : 0.44)*100);
  let count = 0;

  var shuffledMoves = [];
  let [row, column] = [3,3];

  while(count < MaxCount) {
    const move = Math.floor(Math.random() * 4);

    switch(move) {
      case 0:       // move up
        if(row > 0) {
          const coords = [row, column, row-1, column];
          row = row - 1;
          const b = swapValues(newBoard, coords);
          const newCoordinates = { coords, board: b,  };
          shuffledMoves[count] = newCoordinates;
          newBoard = b;
          count++;
        }
        break;
    
      case 1:       // move right
        if(column < 3) {
          const coords = [row, column, row, column + 1];
          column = column + 1;
          const b = swapValues(newBoard, coords);
          const newCoordinates = { coords, board: b,  };
          shuffledMoves[count] = newCoordinates;
          newBoard = b;
          count++;
        }
        break;
      
      case 2:       // move down
        if(row < 3) {
          const coords = [row, column, row+1, column];
          row = row + 1;
          const b = swapValues(newBoard, coords);
          const newCoordinates = { coords, board: b,  };
          shuffledMoves[count] = newCoordinates;
          newBoard = b;
          count++;
        }
        break;
    
      case 3:       // move left
        if(column > 0) {
          const coords = [row, column, row, column-1];
          column = column-1;
          const b = swapValues(newBoard, coords);
          const newCoordinates = { coords, board: b,  };
          shuffledMoves[count] = newCoordinates;
          newBoard = b;
          count++;
        }
        break;
      
      default:
        break;
    }
  }
  return shuffledMoves;
}

export { swapValues, checkWin, findCoordsOfEmptyTile, makeShuffleMoves };
