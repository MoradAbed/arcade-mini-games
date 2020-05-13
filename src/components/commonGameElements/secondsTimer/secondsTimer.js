import React, {useEffect, useState} from 'react';
import "./secondsTimer.css"
import PropTypes from 'prop-types';

SecondsTimer.propTypes = {
    time: PropTypes.number.isRequired,
    onTimerEnd: PropTypes.func
};

function SecondsTimer({time= 10, onTimerEnd}) {

    const [intervalID,setIntervalId]= useState(0)
    const [width,setWidth]= useState(100)

    useEffect(()=>{

        //clear the existing interval
        clearInterval(intervalID)

        //set timer time
        let timer = time;

        //decrease the timer ever second
        const id=  setInterval(()=>{

            timer--;

            //update the UI
            setWidth (100 * (timer/time))

            //if the timer run out
            if(timer <= -1)
            {
                //call the cb function
                if(onTimerEnd) onTimerEnd()

                //stop the interval
                clearInterval((id))
            }



        },1000);

        //store the interval id
        setIntervalId(id);

        //cleanup in case the component resets
        return ()=> clearInterval(intervalID)
    },[])


    //show the timer - change the width of the inner div to make a "timer effect"
    return (
        <div className="timerContainer">
            <div className="timerFill" style={{width: `${width}%`}} >

            </div>
        </div>
    );
}

export default SecondsTimer;