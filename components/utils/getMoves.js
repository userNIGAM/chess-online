import { getPawnMoves } from "../moves/white/pawnMoves";

export const getMoves = (piece, board, row, col) => {
    if (piece === "wp") {
    return getPawnMoves(board, row, col);
  }

  return [];
}
