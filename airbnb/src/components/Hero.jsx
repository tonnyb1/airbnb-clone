import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} alt="hero" className="heroImg" />
            <h1 className="heroHead">Online Experiences</h1>
            <p className="heroPara">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}