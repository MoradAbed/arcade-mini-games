import React from 'react';
import "../../../index.css";
import "./playerHeader.css";
import PropTypes from "prop-types";

PlayerHeader.propTypes = {
    userName: PropTypes.string,
    size: PropTypes.oneOf(["large","small"]),
    playerImage: PropTypes.string,
};


function PlayerHeader({ userName , size, playerImage = "https://i.imgur.com/GmbYauk.jpg" }) {

    //apply different css classes based on the "size" property
    return (
        <div className={size === "large" ? "container" : "containerSmall"}>

            <div className={size === "large" ? "imageContainer" : "imageContainerSmall"}>

                <img className="playerImage" src={playerImage} alt="" />
                <span className={size === "large" ? "playerName" : "playerNameSmall"}>{userName}</span>

            </div>

        </div>
    );
}

export default PlayerHeader;