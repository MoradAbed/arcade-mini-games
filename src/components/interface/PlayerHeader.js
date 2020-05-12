import React from 'react';
import "../../index.css";
import "./playerHeader.css";

function PlayerHeader(props) {

    const [userName, setUserName] = React.useState(null)

    return (
        <div className="container">
            <div className="imageContainer">
                <img className="playerImage" src="https://i.imgur.com/GmbYauk.jpg" />
            </div>
            <div className="playerNameContainer">
                <span>Hashem</span>

            </div>

        </div>
    );
}

export default PlayerHeader;