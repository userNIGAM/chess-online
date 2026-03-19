function findKing(board, color) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece === `${color[0]}k`) {
        return [row, col];
      }
    }
  }
  return null;
}
function findKing(board, color) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece === `${color[0]}k`) {
        return [row, col];
      }
    }
  }
  return null;
}

function isSquareUnderAttack(board, targetRow, targetCol, attackerColor) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];

      if (!piece) continue;

      const pieceColor = piece[0] === "w" ? "white" : "black";

      if (pieceColor !== attackerColor) continue;

      const moves = getMoves(piece, board, row, col);

      if (moves.some(([r, c]) => r === targetRow && c === targetCol)) {
        return true;
      }
    }
  }

  return false;
}

function isKingInCheck(board, color) {
  const kingPos = findKing(board, color);
  if (!kingPos) return false;

  const [kRow, kCol] = kingPos;

  const opponent = color === "white" ? "black" : "white";

  return isSquareUnderAttack(board, kRow, kCol, opponent);
}

const newBoard = board.map(r => [...r]);

newBoard[row][col] = movingPiece;
newBoard[sRow][sCol] = null;

// 🔍 CHECK DETECTION
const opponent = currentPlayer === "white" ? "black" : "white";

if (isKingInCheck(newBoard, opponent)) {
  console.log("CHECK!");
}