import React, {useState} from 'react';
import RpsRound from "./rpsSelect/rpsRound";
import GameIntro from "../commonGameElements/gameIntro/gameIntro";
import Popup from "../commonGameElements/popup/popup";
import "./rps.css"
import PropTypes from "prop-types";

RPS.propTypes = {
    title: PropTypes.string
};

const states = {
    intro : 0,
    inGame : 1,
    endGame: 2
}

function RPS({title=""}) {

    const [gameState, setGameState] = useState(states.intro);
    const [gameResult, setGameResult] = useState();



    //a page with a "start game" button
    if(gameState === states.intro)
        return (
            <div className="gameContainer">
                <GameIntro title={title} onStart={()=>{ setGameState(states.inGame)}}/>
            </div>
        );


    //a page with the game running - waits for a game round result
    if(gameState === states.inGame)
        return (
            <div  className="gameContainer">
                <RpsRound  roundTime={5} onRoundEnd={(res)=> {
                    setTimeout(()=>{setGameState(states.endGame)},1000)
                    setGameResult(res)
                }}/>
            </div>
        );

    //when the game ends - show a popup with a message and an option to restart the game
    if(gameState === states.endGame){
        return   <div  className="gameContainer">
                <Popup
                    btnText={"restart"}
                    onResolve={()=>{
                        setGameResult(null);
                        setGameState(states.intro);
                    }}
                    content={gameResult.draw? "it's a draw!!": gameResult.playerWon?"you won!!!" : "you lost :("} />
            </div>
    }

}

export default RPS;