import { useState } from "react";

const CounterPlane = () => {
    let startedTime = false
    let intervalTime;

    const [currentTime, setCurrentTime] = useState(false)
    const [whatIsTimed, setWhatIsTimed] = useState(false)
    const [totalTime, setTotalTime] = useState(undefined)




    const startTimer = () => {
        if (!currentTime && startedTime != null) {

            startedTime = Date.now()

            intervalTime = setInterval(() => {
                const timeDeltaSeconds = Math.floor((Date.now() - startedTime) / 1000)
                setCurrentTime(timeDeltaSeconds)
            }, 500);

        }
    }

    const stopTimer = () => {
        if (!totalTime) {
            setTotalTime(currentTime)
            setCurrentTime(false);
            startedTime = null
        }
    }


    const secToMin = (seconds) => {
        let time;
        if (seconds > 59) {
            time = `${Math.floor(seconds / 60)} minutes and ${seconds % 60} seconds`
        } else {
            time = `${seconds % 60} seconds`
        }
        return time
    }


    return (
        <div className="home">
            <div className="counter-plane">
                <input type="text" id="myText-0" value={whatIsTimed || "What are we timing?"} onChange={e => setWhatIsTimed(e.target.value)} onClick={e => e.target.value = ""} />
                <button type="button" onClick={() => startTimer()}>Start Timer</button>
                <button type="button" onClick={() => stopTimer()}>Stop Timer</button>
                {!totalTime && (currentTime > 0) && <div className="time-0">{secToMin(currentTime)} have elapsed</div>}
                {totalTime && <div className="totaltime">{secToMin(totalTime)} was your total time</div>}
            </div>

        </div>
    );
}

export default CounterPlane;