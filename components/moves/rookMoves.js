export const getRookMoves = (board, row, col) => {

    const possible = [];
    const color = board[row][col][0]; // 'w' or 'b'

    // UP
    for (let r = row - 1; r >= 0; r--) {

        const target = board[r][col];

        if (!target) {
            possible.push([r, col]);
        } else {
            if (target[0] !== color) {
                possible.push([r, col]); // capture
            }
            break;
        }
    }

    // DOWN
    for (let r = row + 1; r < 8; r++) {

        const target = board[r][col];

        if (!target) {
            possible.push([r, col]);
        } else {
            if (target[0] !== color) {
                possible.push([r, col]);
            }
            break;
        }
    }

    // LEFT
    for (let c = col - 1; c >= 0; c--) {

        const target = board[row][c];

        if (!target) {
            possible.push([row, c]);
        } else {
            if (target[0] !== color) {
                possible.push([row, c]);
            }
            break;
        }
    }

    // RIGHT
    for (let c = col + 1; c < 8; c++) {

        const target = board[row][c];

        if (!target) {
            possible.push([row, c]);
        } else {
            if (target[0] !== color) {
                possible.push([row, c]);
            }
            break;
        }
    }

    return possible;
};