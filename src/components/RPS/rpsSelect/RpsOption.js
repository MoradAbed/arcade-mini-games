import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "../../../index.css";
import "./rpsSelectionRow.css";

function RpsOption({src,value="rock",isSelected,onSelect,canSelect=true}) {

    return (
        <div className={`playerOption ${ isSelected?"selected":""}` }  onClick={()=>canSelect && onSelect()}>
            <img src={src}/>
            <span>{value}</span>
        </div>
    );
}

RpsOption.propTypes = {
    src: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onselect: PropTypes.func,
    canSelect: PropTypes.bool,
    isSelected: PropTypes.bool,

};

export default RpsOption;
