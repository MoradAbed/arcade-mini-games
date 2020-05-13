import React from 'react'
import "./GameIntro.css";

function GameIntro({ onStart,title }) {

    return (
        <div className="RPS-Container">

            <h2>{title}</h2>
            <input type="button" id="startGameBtn" value="Start Game" onClick={() => onStart && onStart()}></input>

        </div>
    );
}

export default GameIntro;
