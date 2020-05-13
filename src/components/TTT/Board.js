import React, { Component } from "react"
import Square from "./Square"
import { render } from "react-dom";


//square-->board==>game
//board => 9 * square(value, onclick)

const boardState = {
    empty: " ",
    X: "x",
    O: "o"
}

export default function Board({onGameEnd,isSinglePlayer= true}) {

    const [isX, setIsX] = React.useState(true);
    const [gameEnded,setGameEnded] = React.useState(false);

    const [boardData, setBoardData] = React.useState(
        [[boardState.empty, boardState.empty, boardState.empty],
        [boardState.empty, boardState.empty, boardState.empty],
        [boardState.empty, boardState.empty, boardState.empty]]
    )

    React.useEffect(()=>{
        if(gameEnded)
            return;
        const xPlayer = hasPlayerWon(boardState.X);
        const oPlayer = hasPlayerWon(boardState.O);
        const boardFull = boardData.every(row=>row.every(cell=> cell !== boardState.empty ))
        if(xPlayer || oPlayer || boardFull )
            {
                setGameEnded(true)
                    if(onGameEnd)
                    onGameEnd({draw:boardFull&&!xPlayer&&!oPlayer , playerWon: xPlayer});
            }
    },[boardData])

    React.useEffect(()=>{

        if(!isX)
            setTimeout(()=>{
               if(gameEnded)
               return;
                setRandomValue()
                setIsX(!isX)
            },1000)

    },[isX])

    const setRandomValue= ()=>{
        let placed = false;
        while(!placed){
            let col = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * 3);
            if(boardData[row][col]=== boardState.empty)
                {
                    setRivalValue(row,col)
                    placed=true;
                }
        }
    }
   
    const hasPlayerWon = (playerSymbol) => {
        //check rows  
        if (boardData.some(row => row.every(cell => cell === playerSymbol)))
            return true;

        //check columns
        for (let col = 0; col < 3; col++) {

            let row;
            for (row = 0; row < 3; row++)
                if (boardData[row][col] !== playerSymbol)
                    break;

            if (row === 3)
                return true;
        }

        if (boardData[0][0] === boardData[1][1] &&
            boardData[1][1] === boardData[2][2] &&
            playerSymbol === boardData[2][2])
            return true;

        if (boardData[0][2] === boardData[1][1] &&
            boardData[1][1] === boardData[2][0] &&
            playerSymbol === boardData[1][1])
            return true;

        return false;


    }

    const setValue = (row, col) => {
        if(gameEnded  )
            return;


        if (boardData[row][col] !== boardState.empty)
            return;
        let newBoard = boardData.map(row => [...row])
        newBoard[row][col] = boardState.X ;
        setIsX(!isX)
        setBoardData(newBoard)
    }
    const setRivalValue = (row, col) => {
        if(gameEnded  )
            return;


        if (boardData[row][col] !== boardState.empty)
            return;
        let newBoard = boardData.map(row => [...row])
        newBoard[row][col] =  boardState.O;
        setIsX(!isX)
        setBoardData(newBoard)
    }

    const renderSquare = (row, col, data) =>
        <Square value={data}
            onClick={() => setValue(row, col)} />;


    return <div className="grid">
        {boardData.map((row, rowIndex) =>
            <div className="border-row">
                {row.map((data, colIndex) => renderSquare(rowIndex, colIndex, data))}
            </div>
        )}

    </div>


};
