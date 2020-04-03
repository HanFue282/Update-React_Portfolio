import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return(
        <header>
        <h2><a href="#home">Hannah Joy Fuentes</a></h2>
            <nav>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </nav>
    </header>
    )
}

export default Navbar;