import React from "react";
import logo from "../assets/journal/logo.png";

export default function JournalNav() {
    return (
        <div className="journalNav">
        <img src={logo} alt="logo" className="journalImg"/>
        <h3 className="journalTitle">my travel journal.</h3>
       </div>
    );
}