import React, { useEffect, useState } from 'react';
import RpsOption from "./RpsOption"
import rockColor from "../icons/icon-rock-color.svg"
import paperColor from "../icons/icon-paper-color.svg"
import scissorsColor from "../icons/icon-scissors-color.svg"
import questionMark from "../icons/icon-questionMark.svg"
import "./rpsRound.css"

const userSelections = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}
const rowState={
    waitingForInput:0,
    hideOptions:1,
    showChosenOption:2,
    done:3
}
function RpsSelectionRow({onSelect,
                             title="choose your hand",
                             titleBeforeOptions= true ,
                             roundEnded = false,
                             areOptionsVisible = true,
                             randomSelection = false})

{

    const [userSelection,setUserSelection] = useState()



    useEffect(() => {

        if(roundEnded)
        {
            //gov the player a random value
            if (randomSelection || !userSelection) {
                let values = Object.values(userSelections);
                let randomChoice = Math.floor(Math.random() * values.length);
                document.getElementById("watchme")
                setUserSelection(values[randomChoice])
            }

            //cal the selected cb function provided in the params
            if(onSelect)
                onSelect(userSelection);


        }

    },[roundEnded,userSelection])


    return (
        <div className="rowContainer">

            {/*show title below options*/}
            {titleBeforeOptions &&<span>{title}</span> }


            {/*show options*/}
            <div  className="playerOptions"  >
                <RpsOption value={areOptionsVisible?"rock":null}
                           src={areOptionsVisible? rockColor:questionMark }
                           isSelected={areOptionsVisible && userSelection === userSelections.rock}
                           canSelect={!roundEnded}
                           onSelect={()=>setUserSelection(userSelections.rock)}/>

                <RpsOption value={areOptionsVisible?"paper":null}
                           src={areOptionsVisible? paperColor:questionMark }
                           canSelect={!roundEnded}
                           isSelected={areOptionsVisible && userSelection === userSelections.paper}
                           onSelect={()=>setUserSelection(userSelections.paper)}/>

                <RpsOption value={areOptionsVisible?"scissors":null}
                           src={areOptionsVisible? scissorsColor:questionMark }
                           canSelect={!roundEnded}
                           isSelected={areOptionsVisible && userSelection === userSelections.scissors}
                           onSelect={()=>setUserSelection(userSelections.scissors)} />
            </div>

            {/*show title above options*/}
            {!titleBeforeOptions &&<span>{title}</span> }

        </div>
    );


}

export default RpsSelectionRow;