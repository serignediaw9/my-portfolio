// src/components/Navbar.js

import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
    return(
        <nav className="navBar">
            <img src={logo} width={347} height={250} alt="Logo" className="logo" />
            <div className="desktopMenu">

            </div>
            <button className="desktopMenuBtn">
                <img src="" alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}