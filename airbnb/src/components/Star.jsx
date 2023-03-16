import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    const Stars = "/src/assets/contact/"
    return (
        <img 
            src={Stars+starIcon} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}