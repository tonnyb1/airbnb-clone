import React from "react";

export default function Joke (props) {

    const [isShown, setIsShown] = React.useState(false)

    console.log(isShown)

    function toggle () {
        setIsShown(prevState => !prevState)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button className="btn" onClick={toggle}>{isShown ? "Hide" : "Show" } punchline</button>
            <hr />
        </div>
    )
}