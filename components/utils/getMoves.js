import { getPawnMoves } from "../moves/pawnMoves";
import { getKnightMoves } from "../moves/knightMoves";
import { getRookMoves } from "../moves/rookMoves";
import { getBishopMoves } from "../moves/bishopMoves";
import { getKingMoves } from "../moves/kingMoves";
import { getQueenMoves } from "../moves/queenMoves";

export const getMoves = (piece, board, row, col) => {

  const type = piece[1];

  if (type === "p") {
    return getPawnMoves(board, row, col);
  }

  if (type === "n") {
    return getKnightMoves(board, row, col);
  }

  if (type === "r") {
    return getRookMoves(board, row, col);
  }

  if (type === "b") {
    return getBishopMoves(board, row, col);
  }

  if (type === "q") {
    return getQueenMoves(board, row, col);
  }

  if (type === "k") {
    return getKingMoves(board, row, col);
  }

  return [];
};