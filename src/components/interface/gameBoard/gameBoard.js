import React from 'react';
import "../../../index.css";
import "./gameBoard.css"

function GameBoard({ children }) {

    //a component that places its children in the middle
    return (
        <div className="gamesContainer">

            <div className="gameStyle">

                {children}

            </div>


        </div>
    );
}

export default GameBoard;

