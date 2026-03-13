"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function ChessBoard() {
  const board = Array.from({ length: 8 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      
      {/* Title */}
      <div className="flex items-center gap-2 text-white mb-6">
        <Crown className="text-yellow-400" size={28} />
        <h1 className="text-2xl font-bold">Chess Board</h1>
      </div>

      {/* Board */}
      <div
        className="
        grid grid-cols-8 
        w-[90vw] max-w-150 
        aspect-square 
        border-4 border-gray-700
        shadow-2xl
        "
      >
        {board.map((_, row) =>
          board.map((_, col) => {
            const isDark = (row + col) % 2 === 1;

            return (
              <motion.div
                key={`${row}-${col}`}
                whileHover={{ scale: 1.05 }}
                className={`
                flex items-center justify-center
                ${isDark ? "bg-white-700" : "bg-green-200"}
                `}
              ></motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}