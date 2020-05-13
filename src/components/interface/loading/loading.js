import React from 'react';
import loading from "./loading.svg";
import "./loading.css";



function Loading() {
    //a loading gif
    return <div className="loadingContainer">
        <img alt="loading gif" src={loading}/>
        <span>loading...</span>
    </div>


}

export default Loading;