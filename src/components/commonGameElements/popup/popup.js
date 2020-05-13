import React from 'react';
import "../../../index.css";
import "./popup.css";
import PropTypes from 'prop-types';

Popup.propTypes = {
    btnText: PropTypes.string,
    content: PropTypes.string,
    onResolve: PropTypes.func
};


function Popup({btnText = 'Click Me', content="", onResolve}) {

    const [visible, setVisible] = React.useState(true)

    //hide popup
    if(!visible)
    return (
        <div></div>
    )

    //show popup
    return (
        <div className="popUpContainer">

                <div className="modal">
                    {/*popup content*/}
                    <div className="content">
                        {content}
                    </div>

                    {/*popup button*/}
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




export default Popup;