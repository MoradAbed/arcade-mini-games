import React, { useEffect, useState } from 'react';
import RpsOption from "./RpsOption"
import rockColor from "../icons/icon-rock-color.svg"
import paperColor from "../icons/icon-paper-color.svg"
import scissorsColor from "../icons/icon-scissors-color.svg"
import questionMark from "../icons/icon-questionMark.svg"
import "./rpsSelectionRow.css"

const userSelections = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

function RpsSelectionRow({ onSelect,
    title = "choose your hand",
    titleBeforeOptions = true,
    roundEnded = false,
    areOptionsVisible = true,
    randomSelection = false }) {

    const [userSelection, setUserSelection] = useState(userSelections.paper)
    const [resultReturned, setResultReturned] = useState(false)

    useEffect(() => {
        if (randomSelection) {
            let values = Object.values(userSelections);
            let randomChoice = Math.floor(Math.random() * values.length);

            setUserSelection(values[randomChoice])
        }

    }, [randomSelection])

    useEffect(() => {

        if (!resultReturned && roundEnded) {
            setResultReturned(true)

            if (onSelect)
                onSelect(userSelection);


        }

    }, [roundEnded])


    return (
        <div className="rowContainer">

            {titleBeforeOptions && <span>{title}</span>}


            <div className="PlayerOptions" >
                <RpsOption value="rock"
                    src={areOptionsVisible ? rockColor : questionMark}
                    isSelected={areOptionsVisible && userSelection === userSelections.rock}
                    canSelect={!roundEnded}
                    onSelect={() => setUserSelection(userSelections.rock)} />

                <RpsOption value="paper"
                    src={areOptionsVisible ? paperColor : questionMark}
                    canSelect={!roundEnded}
                    isSelected={areOptionsVisible && userSelection === userSelections.paper}
                    onSelect={() => setUserSelection(userSelections.paper)} />

                <RpsOption value="scissors"
                    src={areOptionsVisible ? scissorsColor : questionMark}
                    canSelect={!roundEnded}
                    isSelected={areOptionsVisible && userSelection === userSelections.scissors}
                    onSelect={() => setUserSelection(userSelections.scissors)} />
            </div>


            {!titleBeforeOptions && <span>{title}</span>}

        </div>
    );
}

export default RpsSelectionRow;