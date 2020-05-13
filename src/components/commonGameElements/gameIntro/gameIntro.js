import React from 'react'
import "./gameIntro.css";
import PropTypes from 'prop-types';

GameIntro.propTypes = {
    title: PropTypes.string,
    onStart: PropTypes.func
};

function GameIntro({ onStart,title }) {

    //show a "start game button" with a title above it,
    // when the player hits "start game" invoke "onStart" param
    return (
        <div className="RPS-Container">

            {title && <h2>{title}</h2>}
            <input type="button" id="startGameBtn" value="Start Game" onClick={() => onStart && onStart()}></input>

        </div>
    );
}

export default GameIntro;
