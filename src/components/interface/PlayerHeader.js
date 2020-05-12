import React from 'react';
import "../../index.css";
import "./playerHeader.css";

function PlayerHeader({ userName = "hashem96", size = "lare", playerImage = "https://i.imgur.com/GmbYauk.jpg" }) {
    return (
        <div className={size == "large" ? "container" : "containerSmall"}>



            <div className={size == "large" ? "imageContainer" : "imageContainerSmall"}>


                <img className="playerImage" src={playerImage} alt="" />
                <span className={size == "large" ? "playerName" : "playerNameSmall"}>{userName}</span>
            </div>

        </div>
    );
}

export default PlayerHeader;