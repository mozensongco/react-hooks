import Player from "./Player";
import { useState, useRef } from "react";

function ScoreBoard() {
    // Create a state to keep track of players
    const[players, setPlayers] = useState([]);

    // Create a state or ref to keep track of user input
    const input = useRef();

    // Add a function that will update our players state
    // by adding a new player with the name currently in the input field and a unique ID (Date.now() is a good option).
    function handleSubmit(e) {
        e.preventDefault();
        setPlayers([...players, {key: Date.now(), name: input.current.value}]);
        e.target.reset();
    }

    // Code the ScoreBoard layout (title, input + button, area to render players -
    // map through player array state and render a Player component for each, passing the appropriate props.)
    return (
        <>
            <h1>Let the games begin!</h1>
                <div className="player-area">
                    {
                        players.map((player) => {
                            return <Player key={player.key} name={player.name}/>
                        })
                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <input ref={input} id="player-name" type="text" placeholder="Enter a player!"></input>
                    <button type="submit">Submit</button>
                </form>
        </>
    );
}

export default ScoreBoard;