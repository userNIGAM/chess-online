"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { initialBoard, pieceImages } from "./lib/chessData";
import Image from "next/image";
import { getMoves } from "./utils/getMoves";

export default function ChessBoard() {
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [moves, setMoves] = useState([]);

  // Pawn movement logic

  // Handle square click
  function handleClick(row, col) {
    const clickedPiece = board[row][col];

    //if a move square is clicked
    const isMove = moves.some(([r, c]) => r === row && c === col
  );
  if (selected && isMove){
    const [sRow, sCol] = selected;
    const newBoard = board.map(r => [...r])

    newBoard[row][col] = newBoard[sRow][sCol]
    newBoard[sRow][sCol] = null;
    
    setBoard(newBoard);
    setSelected(null)
    setMoves([])

    return;
  }

  //selecting a piece
  if(clickedPiece){

    const legalMoves = getMoves(clickedPiece, board, row, col)
    
    setSelected([row, col]);
    setMoves(legalMoves);
  } else{
    setSelected(null);
    setMoves([])
  }

    // if (!piece) {
    //   setMoves([]);
    //   return;
    // }
    // const legalMoves = getMoves(piece, board, row, col);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-8 w-[90vw] max-w-150 aspect-square border-4 border-gray-700 shadow-2xl">
        {board.map((rowData, row) =>
          rowData.map((piece, col) => {
            const isDark = (row + col) % 2 === 1;

            const isMove = moves.some(([r, c]) => r === row && c === col);

            const isSelected =
              selected && selected[0] === row && selected[1] === col;

            return (
              <motion.div
                key={`${row}-${col}`}
                onClick={() => handleClick(row, col)}
                whileHover={{ scale: 1.05 }}
                className={`relative flex items-center justify-center aspect-square
                ${isDark ? "bg-green-700" : "bg-green-100"}
                ${isSelected ? "ring-4 ring-blue-400" : ""}
                ${isMove ? "ring-4 ring-yellow-400 ring-inset" : ""}
                `}
              >
                {/* Move Dot */}
                {isMove && (
                  <div className="absolute w-4 h-4 bg-black/40 rounded-full"></div>
                )}

                {/* Chess Piece */}
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
          }),
        )}
      </div>
    </div>
  );
}
