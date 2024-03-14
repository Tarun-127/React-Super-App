import { CountdownCircleTimer } from "react-countdown-circle-timer"
import React,{ useState} from "react"

 
export default function Timer(){
    const [seconds,setSeconds] = useState(0);
    const [isPlaying,setIsPlaying] = useState(false);
    return(
        <div>
            <h1>Timer</h1>
            <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={seconds}
            colors={['#004777']}>
      
      {({ remainingTime }) => {
          if (remainingTime === 0) {
            setIsPlaying(false);
            alert("Time is up!");
            return
                   <div>Time is up!</div>;
          } else {
            return (
              <>
                <div>{Math.floor(remainingTime / 3600)} hours</div>{" "}
                {/* 1 hour = 3600 seconds */}{" "}
                {/* 3661 secodonds = 1 hour 1 minute 1 second */}
                <div> {Math.floor((remainingTime % 3600) / 60)} minutes</div>
                <div>{remainingTime % 60} seconds</div>
              </>
            );
          }
        }}
            </CountdownCircleTimer>
            <button onClick={()=> setSeconds((prev)=> prev +1)}>+Seconds</button>
            <button onClick={()=>{
                if (seconds > 1) {
                    setSeconds((prev) => prev-1);
                }
            }}> -Seconds</button>
            <button onClick={()=>setSeconds((prev)=> prev +60)}>+Minutes</button>
            <button onClick={()=>{
                if (seconds >= 60) {
                    setSeconds((prev) => prev-60);
                }
            }}>-Minutes</button>
            <button onClick={()=>setSeconds((prev)=> prev +3600)}>+Hours</button>
            <button onClick={()=>{
                if (seconds >= 3600) {
                    setSeconds((prev) => prev-3600);
                }
            }}>-Hours</button>
            <button disabled={isPlaying} onClick={()=>setIsPlaying(true)}>play</button>
           </div>

    );
}