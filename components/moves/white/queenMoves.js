export const getQueenMoves = (board, row, col) =>{
    const possible  = [];

    const color = board[row][col][0]; // 'w' or 'b'
    
    // Combine Rook and Bishop moves
    // Rook-like moves
    // UP
    for (let r = row -1; r > 0; r--) {
        const target = board[r][col];

        if(!target){
            possible.push([r, col]);
        }else{
            if(target[0] !== color){
                possible.push([r, col]);
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
    }}
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

    // Bishop-like moves
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