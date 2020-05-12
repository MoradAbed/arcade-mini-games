import React from 'react'
import "./RPSIntro.css";

function RPSIntro({ onStart }) {

    return (
        <div className="RPS-Container">

            <h2>WELCOME TO ROCK PAPER SCISSORS</h2>
            <input type="button" id="startGameBtn" value="Start Game" onClick={() => onStart && onStart()}></input>

        </div>
    );
}

export default RPSIntro;
