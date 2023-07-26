import { useState } from "react";

function Player({name}) {

    // Create a new state called score and 2 callback functions
    const[score, setScore] = useState(0);

    function handleIncrement() {
        setScore(score + 1);
    }

    function handleDecrement() {
        setScore(score - 1);
    }

    return (
        <>
            <div>
                <h3>{name}</h3>
                <p>Current Score: {score}</p>
                <button onClick={handleDecrement}>-1</button>
                <button onClick={handleIncrement}>+1</button>
            </div>
        </>
    );
}

export default Player;