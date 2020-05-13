import React from 'react';
import "../../index.css";
import "./gameBoard.css"

function GameBoard({ children }) {
    return (
        <div className="gamesContainer">

            <div className="gameStyle">

                {children}

            </div>


        </div>
    );
}

export default GameBoard;