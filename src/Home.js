import Button from "./Button";
import { useState } from "react";
import CounterPlane from "./CounterPlane";

const Home = () => {
    const counterPlaneAdder = () => {
        console.log("adder");
        return <CounterPlane />
    }

    return (
        <div className="home">
            <div>
                <div className="counter-planes">
                    <CounterPlane />
                </div>
                <button onClick={() => counterPlaneAdder()}>Add another counter and rail Zoli hard</button>
            </div>
        </div>
    );
}

export default Home;