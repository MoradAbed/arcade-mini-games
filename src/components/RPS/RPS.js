import React, {useEffect, useState} from 'react';
import RpsRound from "./rpsSelect/rpsRound";
import GameIntro from "../commonGameElements/gameIntro/gameIntro";
import "./rps.css"
import Popup from "../commonGameElements/popup/popup";

const states = {
    intro : 0,
    inGame : 1,
    endGame: 2
}

function RPS() {

    const [gameState, setGameState] = useState(states.intro);
    const [gameResult, setGameResult] = useState();

    useEffect(()=>{

        if(gameResult)
            setTimeout(()=>{setGameState(states.endGame)},1000)

    }, [ gameResult])


    if(gameState === states.intro)
        return (
            <div className="gameContainer">
                <GameIntro title="you're gonna lose" onStart={()=>{ setGameState(states.inGame)}}/>
            </div>
        );


    if(gameState === states.inGame)
        return (
            <div  className="gameContainer">
                <RpsRound  roundTime={5} onRoundEnd={(res)=> setGameResult(res)}/>
            </div>
        );


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