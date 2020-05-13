import React from 'react';
import "../../../index.css";
import "./popup.css";




const ResultPopup = ({btnText = 'Click Me', onResolve, content="Your score is 420"}) => {

    const [visible, setVisible] = React.useState(true)

    if(!visible)
    return (
        <div></div>
    )

    return (
        <div className="popUpContainer">

                <div className="modal">
                    <div className="content">
                        {content}
                    </div>
                    <button className="close" onClick={() => {
                        setVisible(!visible)
                        onResolve && onResolve()
                        }}>
                        {btnText}
                    </button>
                </div>

        </div>
    )

}

export default ResultPopup;