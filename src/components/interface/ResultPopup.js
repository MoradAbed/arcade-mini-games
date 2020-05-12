import React from 'react';
import "../../index.css";

const ResultPopup = () => {
    return (
        <div className="popUpContainer">
            <div className="popTextContainer"></div>
            <div className="btn">
                <label htmlFor="popUpBtn"></label>
            <input type="button" name="popUpBtn">Close</input>
            </div>
        </div>

    )

}

export default ResultPopup;