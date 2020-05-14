//check if the game has ended or not



export const boardState = {
    empty: " ",
    X: "x",
    O: "o",
};

//check if the game has ended or not
export const checkIfGameEnded = (boardData) => {

    const xPlayer = hasPlayerWon(boardData,boardState.X);
    const oPlayer = hasPlayerWon(boardData, boardState.O);
    const boardFull = boardData.every((row) =>
        row.every((cell) => cell !== boardState.empty)
    );

    return {isDraw:  boardFull && !xPlayer && !oPlayer, playerWon: xPlayer , gameEnded:xPlayer || oPlayer || boardFull };
};

//return true if the 'playerSymbol' won
export const hasPlayerWon = (boardData,playerSymbol) => {
    //check rows
    if (boardData.some((row) => row.every((cell) => cell === playerSymbol)))
        return true;

    //check columns
    for (let col = 0; col < 3; col++) {
        let row;
        for (row = 0; row < 3; row++)
            if (boardData[row][col] !== playerSymbol) break;

        if (row === 3) return true;
    }

    //check diagonal
    if (
        boardData[0][0] === boardData[1][1] &&
        boardData[1][1] === boardData[2][2] &&
        playerSymbol === boardData[2][2]
    )
        return true;


    //check reverse diagonal
    if (
        boardData[0][2] === boardData[1][1] &&
        boardData[1][1] === boardData[2][0] &&
        playerSymbol === boardData[1][1]
    )
        return true;

    //no winner
    return false;
};


export const setValue = (boardData,row, col, valueToSet, onAfterChange) => {
    //if the game hasn't ended
    if (checkIfGameEnded(boardData).gameEnded)
        return;

    //if the selected block is not empty
    if (boardData[row][col] !== boardState.empty)
        return;

    //clone the board
    let newBoard = boardData.map((row) => [...row]);

    //update the selected spot on the board
    newBoard[row][col] = valueToSet;

    //call the callback function if provided
    if(onAfterChange) onAfterChange(newBoard)

};



export const getNpcNextPos = (boardData)=>{

    //npc is about to win
    let check = checkIfAboutToLooseTo(boardData,boardState.O);
    if(check)
        return check;

    //npc is about to lose
    check = checkIfAboutToLooseTo(boardData,boardState.X);
    if(check)
        return check;

    //random empty spot
    while (true) {
        let col = Math.floor(Math.random() * 3);
        let row = Math.floor(Math.random() * 3);

        if (boardData[row][col] === boardState.empty)
            return {row ,col}

    }
}

export const checkIfAboutToLooseTo = (boardData,rivalSymbol) => {

    //check rows
    let rows = boardData.filter((row) => (row.filter((cell) => cell === rivalSymbol).length ===2) && row.includes(boardState.empty))
    if (rows.length)
        return {row:boardData.indexOf(rows[0]), col:rows[0].indexOf(boardState.empty)};

    //check columns
    for (let col = 0; col < 3; col++) {
        let row;
        let count = 0;
        let emptySpot = false;
        for (row = 0; row < 3; row++)
            if (boardData[row][col] === rivalSymbol)
                count++;
            else if (boardData[row][col] === boardState.empty)
                emptySpot = row;

        if(count ===  2 && emptySpot  !== false)
            return {col,row:emptySpot}
    }


    //check diagonal
    let diagonal = [boardData[0][0],boardData[1][1],boardData[2][2]]
    if( diagonal.filter((cell) => cell === rivalSymbol).length ===2  && diagonal.includes(boardState.empty))
        return {row: diagonal.indexOf(boardState.empty), col: diagonal.indexOf(boardState.empty)}

    //check reverse diagonal
    let reverseDiagonal = [boardData[0][2],boardData[1][1],boardData[2][0]]
    if( reverseDiagonal.filter((cell) => cell === rivalSymbol).length ===2  && reverseDiagonal.includes(boardState.empty))
        return {row: reverseDiagonal.indexOf(boardState.empty), col: 2- reverseDiagonal.indexOf(boardState.empty)}



};

export const setNpcValue = (boardData , onChange) => {

    if(checkIfGameEnded(boardData).gameEnded)
        return;

    let {row,col} = getNpcNextPos(boardData)

    setValue(boardData,row, col, boardState.O,onChange);

    //find a free random spot

};
