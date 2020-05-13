import React, {useEffect, useState} from 'react';
import SecondsTimer from "../../commonGameElements/secondsTimer/secondsTimer";
import "../../commonGameElements/secondsTimer/secondsTimer.css"
import RpsSelectionRow from "./rpsSelectionRow";



function RpsRound({onRoundEnd, roundTime= 5}) {
    const [lockSelection,setLockSelection] = useState(false)
    const [userSelection,setUserSelection] = useState()
    const [rivalSelection,setRivalSelection] = useState()
    const [rivalOptionsVisible,setRivalOptionsVisible] = useState(false)



    //todo return the result
useEffect(()=>{
    //on round end

    console.log(onRoundEnd,{userSelection,rivalSelection})

    if(userSelection && rivalSelection ) {

        const draw = (userSelection === rivalSelection);

        const playerWon = !draw && (
            (userSelection === "paper" && rivalSelection === "rock")
            || (userSelection === "rock" && rivalSelection === "scissors")
            || (userSelection === "scissors" && rivalSelection === "paper")
        );
        console.log(onRoundEnd,{draw,playerWon})
        onRoundEnd && onRoundEnd({draw,playerWon})
    }

},[userSelection,rivalSelection,lockSelection])

    return (
        <div className="windowContainer">


            <RpsSelectionRow
                titleBeforeOptions={false}
                title="rival"
                roundEnded={lockSelection}
                areOptionsVisible={rivalOptionsVisible}
                randomSelection = {true}
                onSelect={(selectedOption)=>setRivalSelection(selectedOption)}
            />


            <br/>
            <SecondsTimer time={roundTime} onTimerEnd={ ()=>{
                setLockSelection(true);
                setRivalOptionsVisible(true);
            }}/>
            <br/>
            
            <RpsSelectionRow
                titleBeforeOptions={true}
                title="Choose your hand.."
                roundEnded={lockSelection}
                onSelect={(selectedOption)=>{
                    setUserSelection(selectedOption)
                }}/>
            
        </div>
    );
}

export default RpsRound;