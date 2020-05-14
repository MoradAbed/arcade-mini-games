import React from 'react';
import PropTypes from 'prop-types';
import "../../../index.css"
import "./footer.css"

Footer.propTypes = {

};

function Footer({children}) {
    return (
        <div className="footerContainer">

            {children}
        </div>
    );
}

export default Footer;