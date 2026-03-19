"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { initialBoard, pieceImages } from "./lib/chessData";
import Image from "next/image";
import { getMoves } from "./utils/getMoves";
import { isKingInCheck } from "./utils/checkUtils";

export default function ChessBoard() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [moveHistory, setMoveHistory] = useState([]);
  const [selected, setSelected] = useState(null);
  const [moves, setMoves] = useState([]);
  const [check, setCheck] = useState(null);

  // 🔹 Get color from piece string ("wp", "bk", etc.)
  function getPieceColor(piece) {
    if (!piece) return null;
    return piece[0] === "w" ? "white" : "black";
  }

  function handleClick(row, col) {
    const clickedPiece = board[row][col];

    const isMove = moves.some(([r, c]) => r === row && c === col);

    // ✅ CASE 1: MOVE
    if (selected && isMove) {
      const [sRow, sCol] = selected;
      const movingPiece = board[sRow][sCol];

      // Turn enforcement
      if (getPieceColor(movingPiece) !== currentPlayer) return;

      const newBoard = board.map(r => [...r]);

      // Move piece
      newBoard[row][col] = movingPiece;
      newBoard[sRow][sCol] = null;

      // Save move history
      setMoveHistory(prev => [
        ...prev,
        { piece: movingPiece, from: [sRow, sCol], to: [row, col] }
      ]);

      // 🔍 CHECK DETECTION
      const opponent = currentPlayer === "white" ? "black" : "white";

      if (isKingInCheck(newBoard, opponent)) {
        setCheck(opponent);
      } else {
        setCheck(null);
      }

      setBoard(newBoard);
      setSelected(null);
      setMoves([]);

      // 🔁 SWITCH TURN
      setCurrentPlayer(prev =>
        prev === "white" ? "black" : "white"
      );

      return;
    }

    // ✅ CASE 2: SELECT PIECE
    if (clickedPiece) {
      if (getPieceColor(clickedPiece) !== currentPlayer) return;

      const legalMoves = getMoves(clickedPiece, board, row, col);

      setSelected([row, col]);
      setMoves(legalMoves);
      return;
    }

    // ✅ CASE 3: RESET
    setSelected(null);
    setMoves([]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      
      {/* 🔁 TURN DISPLAY */}
      <h2 className="text-white text-xl mb-2">
        Turn: {currentPlayer === "white" ? "White ♔" : "Black ♚"}
      </h2>

      {/* 🔴 CHECK ALERT */}
      {check && (
        <div className="text-red-500 text-lg mb-2">
          {check} king is in check!
        </div>
      )}

      <div className="grid grid-cols-8 w-[90vw] max-w-[600px] aspect-square border-4 border-gray-700 shadow-2xl">
        {board.map((rowData, row) =>
          rowData.map((piece, col) => {
            const isDark = (row + col) % 2 === 1;

            const isMove = moves.some(
              ([r, c]) => r === row && c === col
            );

            const isSelected =
              selected &&
              selected[0] === row &&
              selected[1] === col;

            // 🔴 CHECK HIGHLIGHT
            const isKing = piece === "wk" || piece === "bk";

            const pieceColor = piece
              ? piece[0] === "w"
                ? "white"
                : "black"
              : null;

            const isCheckedKing = isKing && check === pieceColor;

            return (
              <motion.div
                key={`${row}-${col}`}
                onClick={() => handleClick(row, col)}
                whileHover={{ scale: 1.05 }}
                className={`relative flex items-center justify-center aspect-square
                ${isDark ? "bg-green-700" : "bg-green-100"}
                ${isSelected ? "ring-4 ring-blue-400" : ""}
                ${isMove ? "ring-4 ring-yellow-400 ring-inset" : ""}
                ${isCheckedKing ? "ring-4 ring-red-500" : ""}
                `}
              >
                {/* Move Dot */}
                {isMove && (
                  <div className="absolute w-4 h-4 bg-black/40 rounded-full"></div>
                )}

                {/* Piece */}
                {piece && (
                  <Image
                    src={pieceImages[piece]}
                    alt={piece}
                    width={100}
                    height={100}
                    className="w-[70%] h-[70%] object-contain"
                  />
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}