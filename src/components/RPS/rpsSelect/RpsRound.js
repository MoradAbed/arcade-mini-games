import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SecondsTimer from "../../commonGameElements/secondsTimer/SecondsTimer";
import "../../commonGameElements/secondsTimer/secondsTimer.css"
import RpsSelectionRow from "./RpsSelectionRow";

RpsRound.propTypes = {
    
};

function RpsRound(props) {
    const [lockSelection,setLockSelection] = useState(false)
    const [userSelection,setUserSelection] = useState()
    const [rivalSelection,setRivalSelection] = useState()

    //todo return the result
useEffect(()=>{
    if(userSelection && rivalSelection && lockSelection)
        console.log(userSelection,"---", rivalSelection)

},[userSelection,rivalSelection,lockSelection])

    return (
        <div className="windowContainer">


            <RpsSelectionRow
                titleBeforeOptions={false}
                title="rival"
                roundEnded={lockSelection}
                areOptionsVisible={true}
                randomSelection = {true}
                onSelect={(selectedOption)=>setRivalSelection(selectedOption)}
            />


            <br/>
            <SecondsTimer time="5" onTimerEnd={ ()=> setLockSelection(true)
            }/>
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