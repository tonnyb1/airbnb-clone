import React from "react";
import logo from "../assets/airbnb.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt= 'bnblogo' className="logo" />
        </nav>
    );
}