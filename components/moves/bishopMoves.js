export const getBishopMoves = (board, row, col) => {

    const possible = [];
    const color = board[row][col][0]; // 'w' or 'b'

    // UP-LEFT
    for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {

        const target = board[r][c];

        if (!target) {
            possible.push([r, c]);
        } else {
            if (target[0] !== color) {
                possible.push([r, c]); // capture
            }
            break;
        }
    }

    // UP-RIGHT
    for (let r = row - 1, c = col + 1; r >= 0 && c < 8; r--, c++) {
        
        const target = board[r][c];

        if (!target) {
            possible.push([r, c]);
        } else {
            if (target[0] !== color) {
                possible.push([r, c]);
            }
            break;
        }
    }

    // DOWN-LEFT
    for (let r = row + 1, c = col - 1; r < 8 && c >= 0; r++, c--) {

        const target = board[r][c];

        if (!target) {
            possible.push([r, c]);
        } else {
            if (target[0] !== color) {
                possible.push([r, c]);
            }
            break;
        }
    }

    // DOWN-RIGHT
    for (let r = row + 1, c = col + 1; r < 8 && c < 8; r++, c++) {

        const target = board[r][c];

        if (!target) {
            possible.push([r, c]);
        } else {
            if (target[0] !== color) {
                possible.push([r, c]);
            }
            break;
        }
    }

    return possible;
}