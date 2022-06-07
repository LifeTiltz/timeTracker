import { useState } from "react";
import Banner from "./Banner";
import CounterPlane from "./CounterPlane";

const Home = () => {
    const [howManyCounters, setHowManyCounters] = useState(1)

    const counterPlaneAdder = () => {
        let content = []
        for (let i = 0; i < howManyCounters; i++) {
            content.push(<div id={i}><CounterPlane /></div>)
        }
        return content
    }

    return (
        <div className="home">
            <Banner />
            <div>
                <div className="counter-planes">
                    {counterPlaneAdder()}
                </div>
                <button onClick={() => setHowManyCounters(howManyCounters + 1)}>Add another thing to time</button>
            </div>
        </div>
    );
}

export default Home;