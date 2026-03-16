export const getKnightMoves = (board, row, col) =>{
    const possible = []

    const KnightMoves = [
        [-2, -1], [-2,1],
        [-1, -2], [-1, 2],
        [1, -2], [1, 2],
        [2, -1], [2, 1]
    ];
    KnightMoves.forEach(([rOffset, cOffset]) =>{
        const newRow = row + rOffset;
        const newCol = col + cOffset;
        
        //check Board Boundaries
        if(
            newRow >= 0 &&
            newRow < 8 &&
            newCol >= 0 &&
            newCol < 8
        ){
            possible.push([newRow, newCol])
        }
    })
    return possible;
}