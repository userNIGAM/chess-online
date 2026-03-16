export const getPawnMoves = (board, row, col) => {
  const possible = [];
  const piece = board[row][col];
  const color = piece[0]; // 'w' or 'b'

  //Handle WHITE PAWN (moves up) 
  if (color === "w") {
    // 1 step forward
    if (row > 0 && !board[row - 1][col]) {
      possible.push([row - 1, col])
    }
    // 2 steps forward from starting position
    if (
      row === 6 &&
      !board[row - 1][col] &&
      !board[row - 2][col]
    ) {
      possible.push([row - 2, col])
    }

    //capture left
    if (row > 0 && col > 0 && board[row - 1][col - 1]?.[0] === "b") {
      possible.push([row - 1, col - 1])
    }
    //capture right
    if (row > 0 && col < 7 && board[row - 1][col + 1]?.[0] === "b") {
      possible.push([row - 1, col + 1])
    }
  }


  //Handle BLACK PAWN (moves down)
  if ( color === 'b'){

    // 1 step forward
    if(row <7 && !board[row +1][col]){
      possible.push([row + 1, col])  
    }

    // 2 steps forward from starting position
    if (
      row === 1 &&
      !board[row + 1][col] &&
      !board[row + 2][col]
    ) {
      possible.push([row + 2, col])
    }

    //capture left
    if (row < 7 && col > 0 && board[row + 1][col - 1]?.[0] === "w") {
      possible.push([row + 1, col - 1])
    }
    //capture right
    if (row < 7 && col < 7 && board[row + 1][col + 1]?.[0] === "w") {
      possible.push([row + 1, col + 1])
    }
  }


  return possible;
}