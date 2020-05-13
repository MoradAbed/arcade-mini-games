import React, {useState} from 'react';
import Board from "./Board";
import GameIntro from "../commonGameElements/gameIntro/gameIntro";
import Popup from "../commonGameElements/popup/popup";


const states = {
    intro: 0,
    inGame: 1,
    gameResult:2
}

function TTT() {

    const [gameState, setGameSate] = useState(states.intro)
    const [gameResult, setGameResult] = useState()

    if (gameState === states.intro)
        return <div>
            <GameIntro title="Tick tack toe" onStart={() => setGameSate(states.inGame)}/>
        </div>

    if (gameState === states.inGame)
        return (
            <div>
                <Board onGameEnd={(result) => {
                    //todo do a timeout here
                    setTimeout(()=>{
                        setGameSate(states.gameResult)
                    }, 300)
                    setGameResult(result)
                }}/>
            </div>
        );

    if (gameState === states.gameResult)
        { // noinspection BadExpressionStatementJS
            return <div>
                <Popup
                    btnText="restart"
                    onResolve={()=>{
                        setGameResult(null);
                        setGameSate(states.intro)
                    }}
                    content={gameResult.draw?"it's a draw!":(gameResult.playerWon?"you won!": "you lost :(")}/>
           </div>
        }


}




export default TTT;