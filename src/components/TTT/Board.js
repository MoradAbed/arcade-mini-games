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
    //check if the game has ended or not


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



    const getNpcNextPos = ()=>{

        //npc is about to win
        let check = checkIfAboutToLooseTo(boardState.O);
        if(check)
            return check;

        //npc is about to lose
        check = checkIfAboutToLooseTo(boardState.X);
        if(check)
            return check;

        //random spot
        while (true) {
            let col = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * 3);

            if (boardData[row][col] === boardState.empty)
                return {row ,col}

        }
    }
    const checkIfAboutToLooseTo = (rivalSymbol) => {
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
                if (boardData[row][col] === rivalSymbol) count++;
                else if (boardData[row][col] === boardState.empty) emptySpot = row;

            if(count ===  2 && emptySpot)
                return {col,row:emptySpot}
        }


        //check diagonal
        let diagonal = [boardData[0][0],boardData[1][1],boardData[2][2]]
        if( diagonal.filter((cell) => cell === rivalSymbol).length ===2  && diagonal.includes(boardState.empty))
            return {row: diagonal.indexOf(boardState.empty), col: diagonal.indexOf(boardState.empty)}


        let reverseDiagonal = [boardData[0][2],boardData[1][1],boardData[2][0]]
        if( reverseDiagonal.filter((cell) => cell === rivalSymbol).length ===2  && diagonal.includes(boardState.empty))
            return {row: reverseDiagonal.indexOf(boardState.empty), col: 2- reverseDiagonal.indexOf(boardState.empty)}



    };
    const setRandomValue = () => {

        if(checkIfGameEnded().gameEnded)
            return;

        let {row,col} = getNpcNextPos()

        setValue(row, col, boardState.O);

        //find a free random spot

    };


    //render a square
    const renderSquare = (row, col, data) => (
        <Square key={`cell_${row+col}`}  value={data} onClick={() => isTurnX && setValue(row, col, boardState.X)}/>
    );

    //render all squares
    return (
        <div className="grid">
            {boardData.map((row, rowIndex) => (
                <div className="border-row" key={`row_${rowIndex}`}>
                    {row.map((data, colIndex) => renderSquare(rowIndex, colIndex, data))}
                </div>
            ))}
        </div>
    );
}
