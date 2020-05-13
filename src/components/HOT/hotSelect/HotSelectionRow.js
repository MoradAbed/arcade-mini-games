import React from 'react'
import headIcon from "../icons/Head.png"
import tailIcon from "../icons/Tail.png"
import HotOption from "./HotOption"
import "./hotSelectionRow.css"


const userSelections = {
    head: true,
    tail: false,
}

function HotSelectionRow({ onSelect,
    title,
    roundEnded = false,
    areOptionsVisible = true,
    randomSelection = false }) {

    const [userSelection, setUserSelection] = React.useState(userSelections.head)
    const [resultReturned, setResultReturned] = React.useState(false)


    React.useEffect(() => {
        if (randomSelection) {
            let values = Object.values(userSelections);
            let randomChoice = Math.floor(Math.random() * values.length);

            setUserSelection(values[randomChoice])
        }

    }, [randomSelection])

    React.useEffect(() => {

        if (!resultReturned && roundEnded) {
            setResultReturned(true)

            if (onSelect)
                onSelect(userSelection);


        }

    }, [roundEnded])

    return (

        <div className="rowContainer">

            <p id="title"> {title} </p>

            <div className="PlayerOptions">

                <HotOption
                    value="head"
                    src={headIcon}
                    isSelected={areOptionsVisible && userSelection === userSelections.head}
                    canSelect={!roundEnded}
                    onSelect={() => setUserSelection(userSelections.head)}
                />


                <HotOption
                    value="tail"
                    src={tailIcon}
                    isSelected={areOptionsVisible && userSelection === userSelections.tail}
                    canSelect={!roundEnded}
                    onSelect={() => setUserSelection(userSelections.tail)}

                />


            </div>
        </div>
    )
}

export default HotSelectionRow
