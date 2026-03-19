// utils/checkUtils.js

import { getMoves } from "./getMoves";

// 🟢 Get color from piece string
export function getPieceColor(piece) {
  if (!piece) return null;
  return piece[0] === "w" ? "white" : "black";
}

// 🟢 Find king position
export function findKing(board, color) {
  const king = color === "white" ? "wk" : "bk";

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col] === king) {
        return [row, col];
      }
    }
  }

  return null;
}

// 🟢 Check if a square is attacked
export function isSquareUnderAttack(board, targetRow, targetCol, attackerColor) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (!piece) continue;

      const color = getPieceColor(piece);

      if (color !== attackerColor) continue;

      const moves = getMoves(piece, board, row, col);

      if (moves.some(([r, c]) => r === targetRow && c === targetCol)) {
        return true;
      }
    }
  }

  return false;
}

// 🟢 Final check detection
export function isKingInCheck(board, color) {
  const kingPos = findKing(board, color);
  if (!kingPos) return false;

  const [kRow, kCol] = kingPos;

  const opponent = color === "white" ? "black" : "white";

  return isSquareUnderAttack(board, kRow, kCol, opponent);
}