import React, {useEffect, useState} from 'react';
import SecondsTimer from "../../commonGameElements/secondsTimer/secondsTimer";
import "../../commonGameElements/secondsTimer/secondsTimer.css"
import RpsSelectionRow from "./rpsSelectionRow";
import PropTypes from "prop-types";

RpsRound.propTypes = {
    onRoundEnd: PropTypes.func,
    roundTime: PropTypes.number.isRequired,
};


function RpsRound({onRoundEnd, roundTime= 5}) {
    const [lockSelection,setLockSelection] = useState(false)
    const [userSelection,setUserSelection] = useState()
    const [rivalSelection,setRivalSelection] = useState()
    const [rivalOptionsVisible,setRivalOptionsVisible] = useState(false)



useEffect(()=>{
    //on round end



    if(userSelection && rivalSelection ) {

        const draw = (userSelection === rivalSelection);

        const playerWon = !draw && (
            (userSelection === "paper" && rivalSelection === "rock")
            || (userSelection === "rock" && rivalSelection === "scissors")
            || (userSelection === "scissors" && rivalSelection === "paper")
        );

        onRoundEnd && onRoundEnd({draw,playerWon})
    }

},[userSelection,rivalSelection,lockSelection])

    return (
        <div className="windowContainer">

            {/*rival options and label*/}
            <RpsSelectionRow
                titleBeforeOptions={false}
                title="rival"
                roundEnded={lockSelection}
                areOptionsVisible={rivalOptionsVisible}
                randomSelection = {true}
                onSelect={(selectedOption)=>setRivalSelection(selectedOption)}
            />

            {/*round timer*/}
            <br/>
            <SecondsTimer time={roundTime} onTimerEnd={ ()=>{
                setLockSelection(true);
                setRivalOptionsVisible(true);
            }}/>
            <br/>

            {/*player options and label*/}
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