export const getPawnMoves = (board, row, col) => {
    const possible = [];

    // move 1 forward
    if (row > 0 && !board[row - 1][col]) {
      possible.push([row - 1, col]);
    }

    // move 2 forward from starting position
    if (
      row === 6 &&
      !board[row - 1][col] &&
      !board[row - 2][col]
    ) {
      possible.push([row - 2, col]);
    }

    return possible;
  }