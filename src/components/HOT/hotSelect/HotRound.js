import React from 'react'
import "./hotRound.css"
import HotSelectionRow from "./HotSelectionRow"

function HotRound() {


    const [lockSelection, setLockSelection] = React.useState(false)
    const [userSelection, setUserSelection] = React.useState()
    const [rivalSelection, setRivalSelection] = React.useState()

    React.useEffect(() => {
        if (userSelection && rivalSelection && lockSelection)
            console.log(userSelection, "---", rivalSelection)

    }, [userSelection, rivalSelection, lockSelection])
    return (
        <div className="windowContainer">


            <HotSelectionRow
                title="Choose your coin's face"
                roundEnded={lockSelection}
                onSelect={(selectedOption) => {
                    setUserSelection(selectedOption)
                }} />


        </div>
    )
}

export default HotRound
