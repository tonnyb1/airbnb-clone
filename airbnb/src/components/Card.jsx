import React from "react";
import cardImg from "../assets/katie.png";
import star from "../assets/Star.png";

export default function Card() {
    return (
        <section className="card">
                <img src={cardImg} alt="cardImg" className="cardImg"/>
                <div className="cardStats">
                    <img src={star} alt="star" className="star" />
                    <span>5.0</span>
                    <span className="grey">(6).</span>
                    <span className="grey">USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
        </section>
        
    );
}