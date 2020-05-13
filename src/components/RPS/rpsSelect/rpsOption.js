import React, {useState} from 'react';
import "../../../index.css";
import "./rpsOption.css";
import PropTypes from "prop-types";

RpsOption.propTypes = {
    src: PropTypes.string.isRequired,
    value: PropTypes.string,
    onselect: PropTypes.func,
    canSelect: PropTypes.bool,
    isSelected: PropTypes.bool,

};

function RpsOption({src,value,isSelected,onSelect,canSelect=true}) {

    return (
        <div className={`playerOption ${ isSelected?"selected":""}` }  onClick={()=>canSelect && onSelect()}>
            <img src={src}/>
            {value && <span>{value}</span>}
        </div>
    );
}


export default RpsOption;
