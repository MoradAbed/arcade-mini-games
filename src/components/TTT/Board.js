import React, {Component} from "react";
import Square from "./Square";
import {render} from "react-dom";

//square-->board==>game
//board => 9 * square(value, onclick)

const boardState = {
    empty: " ",
    X: "x",
    O: "o",
};

export default function Board({onGameEnd}) {
    const [isX, setIsX] = React.useState(true);

    //setup the board data with empty content
    const [boardData, setBoardData] = React.useState([
        [boardState.empty, boardState.empty, boardState.empty],
        [boardState.empty, boardState.empty, boardState.empty],
        [boardState.empty, boardState.empty, boardState.empty],
    ]);

    //whenever the board is modified, check of the game has ended
    React.useEffect(() => {
        const {isDraw, playerWon, gameEnded} = checkIfGameEnded();

        if (gameEnded && onGameEnd)
             onGameEnd({
                    draw: isDraw,
                    playerWon:playerWon
                });

    }, [boardData]);

    //if the player played his turn, play the npc's turn
    React.useEffect(() => {

        if (!isX){


            let id = setTimeout(() => {
                    setRandomValue();
                    setIsX(!isX);
                }, 600);

            return ()=> clearTimeout(id)

        }
    }, [isX]);




    const checkIfGameEnded = () => {
        const xPlayer = hasPlayerWon(boardState.X);
        const oPlayer = hasPlayerWon(boardState.O);
        const boardFull = boardData.every((row) =>
            row.every((cell) => cell !== boardState.empty)
        );

        return {isDraw:  boardFull && !xPlayer && !oPlayer, playerWon: xPlayer , gameEnded:xPlayer || oPlayer || boardFull };
    };
    const hasPlayerWon = (playerSymbol) => {
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

        if (
            boardData[0][0] === boardData[1][1] &&
            boardData[1][1] === boardData[2][2] &&
            playerSymbol === boardData[2][2]
        )
            return true;

        if (
            boardData[0][2] === boardData[1][1] &&
            boardData[1][1] === boardData[2][0] &&
            playerSymbol === boardData[1][1]
        )
            return true;

        return false;
    };




    const setValue = (row, col, valueToSet) => {
        if (checkIfGameEnded().gameEnded) return;

        if (boardData[row][col] !== boardState.empty) return;
        let newBoard = boardData.map((row) => [...row]);
        newBoard[row][col] = valueToSet;
        setIsX(!isX);
        setBoardData(newBoard);
    };
    const setRandomValue = () => {
        let placed = false;
        while (!placed && !checkIfGameEnded().gameEnded) {
            let col = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * 3);
            if (boardData[row][col] === boardState.empty) {
                setValue(row, col, boardState.O);
                placed = true;
            }
        }
    };




    const renderSquare = (row, col, data) => (
        <Square value={data} onClick={() => setValue(row, col, boardState.X)}/>
    );
    return (
        <div className="grid">
            {boardData.map((row, rowIndex) => (
                <div className="border-row">
                    {row.map((data, colIndex) => renderSquare(rowIndex, colIndex, data))}
                </div>
            ))}
        </div>
    );
}
