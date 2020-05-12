import React from 'react';
import loading from "./loading.svg";
import "./loading.css";



function Loading() {

    return <div className="loadingContainer">
        <img src={loading}/>
        <span>loading...</span>
    </div>


}

export default Loading;