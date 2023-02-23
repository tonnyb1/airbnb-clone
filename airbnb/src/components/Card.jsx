import React from "react";
import star from "../assets/Star.png";

export default function Card(props) {;
    // const { title, price, coverImg, stats, location, openSpots } = {card};

    let badgeText
    if (props?.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props?.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src={`../images/${props?.coverImg}`} alt="cardImg" className="cardImg"/>
            <div className="cardStats">
                <img src={star} alt="star" className="star" />
                <span>({props?.stats?.rating})</span>
                <span className="grey">{props?.stats?.reviews}.</span>
                <span className="grey">{props?.location}</span>
            </div>
            <p className="cardTitle">{props?.title}</p>
            <p><b>From ${props?.price}</b> / person</p>
        </div>
        
    );
}