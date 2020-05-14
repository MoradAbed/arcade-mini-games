import React, {Component} from "react";
import Square from "./square";
import {render} from "react-dom";
import PropTypes from "prop-types";
import {boardState, checkIfGameEnded, setNpcValue, setValue} from "./board.logic";


Board.propTypes = {
    onGameEnd: PropTypes.func,
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
        const {isDraw, playerWon, gameEnded} = checkIfGameEnded(boardData);

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
                setNpcValue(boardData,(newBoardData)=>{
                    //update the board
                    setBoardData(newBoardData);

                    //swap turn
                    setIsTurnX(!isTurnX);
                });

            }, 600);

            return ()=> clearTimeout(id)

        }

    }, [isTurnX]);


    //render a square
    const renderSquare = (row, col, data) => (
        <Square key={`cell_${row+col}`}  value={data} onClick={() => isTurnX && setValue(boardData,row, col, boardState.X, (newBoardData)=>{
            //update the board
            setBoardData(newBoardData);

            //swap turn
            setIsTurnX(!isTurnX);
        })}/>
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
