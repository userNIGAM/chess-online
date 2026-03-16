import { getPawnMoves } from "../moves/white/pawnMoves";
import {getKnightMoves } from "../moves/white/knightMoves"
import {getRookMoves} from "../moves/white/rookMoves"
import {getBishopMoves} from "../moves/white/bishopMoves"
import {getKingMoves} from "../moves/white/kingMoves"
import {getQueenMoves} from "../moves/white/queenMoves"

export const getMoves = (piece, board, row, col) => {
    if (piece === "wp") {
    return getPawnMoves(board, row, col);
  }

  if (piece === "wn"){
    return getKnightMoves(board, row, col)
  }
  if (piece === "wr"){
    return getRookMoves(board, row, col)
  }
  if(piece === "wb"){
    return getBishopMoves(board, row, col)
  }
  if(piece === "wk"){
    return getKingMoves(board, row, col)
  }
  if(piece === "wq"){
    return getQueenMoves(board, row, col)
  }
  return [];
}
