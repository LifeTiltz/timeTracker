import { useState } from "react";

const CounterPlane = () => {
    let startedTime = undefined

    const [currentTime, setCurrentTime] = useState(false)
    const [whatIsTimed, setWhatIsTimed] = useState(false)
    const [totalTime, setTotalTime] = useState(undefined)

    const startTimer = () => {
        if (!startedTime) {
            console.log("started timer");
            startedTime = Date.now()
        }
    }

    const stopTimer = () => {
        setTotalTime(currentTime)
        setCurrentTime(false);
        //clearInterval(countingInterval);
    }

    setInterval(() => {
        const timeDeltaSeconds = Math.floor((Date.now() - startedTime) / 1000)
        if (startedTime) {
            setCurrentTime(timeDeltaSeconds)
            // console.log(!currentTime);
        }
    }, 500);






    return (
        <div className="home">
            <div className="counter-plane-0">
                <input type="text" id="myText-0" value={whatIsTimed || "What are we timing?"} onChange={e => setWhatIsTimed(e.target.value)} onClick={e => e.target.value = ""} />
                <button type="button" onClick={() => startTimer()}>Start Timer</button>
                <button type="button" onClick={() => stopTimer()}>Stop Timer</button>
                {!totalTime && (currentTime > 0) && <div className="time-0">{currentTime} seconds have elapsed</div>}
                {totalTime && <div className="totaltime">{totalTime} was your total time</div>}
            </div>

        </div>
    );
}

export default CounterPlane;