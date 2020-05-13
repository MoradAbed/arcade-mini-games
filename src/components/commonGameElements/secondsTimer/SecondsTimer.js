import React, {useEffect, useState} from 'react';
import "./secondsTimer.css"


function SecondsTimer({time= 10, onTimerEnd}) {

    const [intervalID,setIntervalId]= useState(0)
    const [width,setWidth]= useState(100)

    useEffect(()=>{

        clearInterval(intervalID)
        let timer = time;
        const id=  setInterval(()=>{

            timer--;
            setWidth (100 * (timer/time))

            if(timer <= -1)
            {
                if(onTimerEnd) onTimerEnd()
                clearInterval((id))
            }



        },1000);


       setIntervalId(id);
        return ()=> clearInterval(intervalID)
    },[])


    return (
        <div className="timerContainer">
            <div className="timerFill" style={{width: `${width}%`}} >

            </div>
        </div>
    );
}

export default SecondsTimer;