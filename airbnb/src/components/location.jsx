import React from "react";
import Pin from "../assets/journal/pin.png";
import Fuji from "../assets/journal/fuji.png";

export default function Location(props) {
    return (
        <div className="location">
            <div>
            <img src={props?.imageUrl} alt="pin" className="fujiImg"/>
            </div>
            <div className="journalInfo">
                <img src={Pin} alt="loc" className="pin"/>
                <span className="locationPin">{props.location}</span>
                <a href={props?.googleMapsUrl} className="maps">View on Google Maps</a>
                <h1 className="fujiTitle">{props?.title}</h1>
                <p className="journalDate">{props?.startDate} - {props?.endDate}</p>
                <p className="journalDescription">{props?.description}</p>
            </div>
        </div>
    )
}