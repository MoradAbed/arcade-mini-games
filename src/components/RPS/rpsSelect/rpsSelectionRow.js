import React, {useEffect, useState} from 'react';
import RpsOption from "./rpsOption"
import rockColor from "../icons/icon-rock-color.svg"
import paperColor from "../icons/icon-paper-color.svg"
import scissorsColor from "../icons/icon-scissors-color.svg"
import questionMark from "../icons/icon-questionMark.svg"
import "./rpsRound.css"
import PropTypes from "prop-types";

RpsSelectionRow.propTypes = {
    onSelect: PropTypes.func,
    title: PropTypes.string,
    titleBeforeOptions: PropTypes.bool,
    roundEnded: PropTypes.bool,
    areOptionsVisible: PropTypes.bool,
    randomSelection: PropTypes.bool,
};



const userSelections={
    rock:"rock",
    paper:"paper",
    scissors:"scissors"
}


function RpsSelectionRow({onSelect,
                             title="choose your hand",
                             titleBeforeOptions= true ,
                             roundEnded = false,
                             areOptionsVisible = true,
                             randomSelection = false})

{

    const [userSelection,setUserSelection] = useState()



    useEffect(()=>{

        //when the round ends
        if(roundEnded)
        {
            //gov the player a random value if "roundSelection" is true or if the user didn't select an option
            if (randomSelection || !userSelection) {
                let values = Object.values(userSelections);
                let randomChoice = Math.floor(Math.random() * values.length);
                document.getElementById("watchme")
                setUserSelection(values[randomChoice])
            }

            //call the selected cb function provided in the params
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