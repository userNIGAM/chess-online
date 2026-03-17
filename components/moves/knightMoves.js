export const getKnightMoves = (board, row, col) => {

  const possible = [];
  const color = board[row][col][0]; // 'w' or 'b'

  const knightMoves = [
    [-2, -1], [-2, 1],
    [-1, -2], [-1, 2],
    [1, -2], [1, 2],
    [2, -1], [2, 1]
  ];

  knightMoves.forEach(([rOffset, cOffset]) => {

    const newRow = row + rOffset;
    const newCol = col + cOffset;

    // check boundaries
    if (
      newRow >= 0 &&
      newRow < 8 &&
      newCol >= 0 &&
      newCol < 8
    ) {
      const target = board[newRow][newCol];

      // allow if empty OR enemy piece
      if (!target || target[0] !== color) {
        possible.push([newRow, newCol]);
      }
    }
  });

  return possible;
};