import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    const Stars = "/src/assets/contact/"
    console.log(Stars+starIcon)
    return (
        <img 
            src={Stars+starIcon} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}