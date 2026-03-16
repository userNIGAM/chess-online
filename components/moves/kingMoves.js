export const getKingMoves = (board, row, col) => {
    const possible = [];
    const color = board[row][col][0]; // 'w' or 'b'

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    directions.forEach(([rOffset, cOffset]) => {
        const newRow = row + rOffset;
        const newCol = col + cOffset;

        // Check board boundaries
        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const target = board[newRow][newCol];
            if (!target || target[0] !== color) {
                possible.push([newRow, newCol]);
            }
        }
    });

    return possible;
}