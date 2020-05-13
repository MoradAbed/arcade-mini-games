import React, {Component} from "react";
import Square from "./square";
import {render} from "react-dom";
import PropTypes from "prop-types";


Board.propTypes = {
    onGameEnd: PropTypes.func,
};


const boardState = {
    empty: " ",
    X: "x",
    O: "o",
};

export default function Board({onGameEnd}) {

    //a way to indicate who's turn it is
    const [isTurnX, setIsTurnX] = React.useState(true);


    //setup the board data with empty content
    const [boardData, setBoardData] = React.useState([
        [boardState.empty, boardState.empty, boardState.empty],
        [boardState.empty, boardState.empty, boardState.empty],
        [boardState.empty, boardState.empty, boardState.empty],
    ]);


    //whenever the board is modified, check if the game has ended
    React.useEffect(() => {
        const {isDraw, playerWon, gameEnded} = checkIfGameEnded();

        //if the game has ended - call "onGameEnd" param
        if (gameEnded && onGameEnd)
             onGameEnd({
                    draw: isDraw,
                    playerWon:playerWon
                });

    }, [boardData]);


    //if the player played his turn, play the npc's turn after a small delay
    React.useEffect(() => {

        if (!isTurnX){

            let id = setTimeout(() => {
                    setRandomValue();
                    setIsTurnX(!isTurnX);
                }, 600);

            return ()=> clearTimeout(id)

        }
    }, [isTurnX]);


    //check if the game has ended or not
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

    const setValue = (row, col, valueToSet) => {
        //if the game hasn't ended
        if (checkIfGameEnded().gameEnded)
            return;

        //if the selected block is not empty
        if (boardData[row][col] !== boardState.empty)
            return;

        //clone the board
        let newBoard = boardData.map((row) => [...row]);

        //update the selected spot on the board
        newBoard[row][col] = valueToSet;

        //update the board
        setBoardData(newBoard);

        //swap turn
        setIsTurnX(!isTurnX);
    };

    //place an 0 in a random spot
    const setRandomValue = () => {
        let placed = false;

        if(checkIfGameEnded().gameEnded)
            return;

        //find a free random spot
        while (!placed) {
            let col = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * 3);

            // a random free spot is found - update the board
            if (boardData[row][col] === boardState.empty) {
                setValue(row, col, boardState.O);
                placed = true;
            }
        }
    };


    //render a square
    const renderSquare = (row, col, data) => (
        <Square value={data} onClick={() => isTurnX && setValue(row, col, boardState.X)}/>
    );

    //render all squares
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
