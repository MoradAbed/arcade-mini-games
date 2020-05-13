import React from 'react';
import "./hotOption.css";


function HotOption({src="https://i.imgur.com/FRaC6W7.png",value="head",isSelected,onSelect,canSelect=true}) {
    return (
        <div className={`playerOption ${ isSelected?"selected":""}` }  onClick={()=>canSelect && onSelect()}>
        <img src={src}/>
        <span>{value}</span>
    </div>
    )
}

export default HotOption
