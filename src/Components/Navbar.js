import React from 'react'
import logo from "./navImage.png";
import "./Nav.css";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <body>
        <nav className="nav">

            <div className="left-nav">
                <img id="logo" src={logo} alt="logo" />
                <p className="logo-text">Radio Telescope Project</p>
            </div>

            <div className="right-nav">
                <div className="headings">
                    <div className="nav-item">
                        <a href="#" id="home" className="nav-link">Home</a>
                        <hr className="navline" />
                    </div>
                    
                    <div className="nav-item">
                        <a href="#" id="telescopes" className="nav-link">Telescopes</a>
                        <hr className="navline" />
                    </div>
                    <div className="nav-item">
                        <a href="#" id="publications" className="nav-link">Publications</a>
                        <hr className="navline" />
                    </div>
                    <div className="nav-item">
                        <a href="#" id="team" className="nav-link">Team</a>
                        <hr className="navline" />
                    </div>

                    <div className="nav-item">
                        <a href="#" id="contact" className="nav-link">Contact us</a>
                        <hr className="navline" />
                    </div>
                </div>
            </div>
        </nav>
    </body>
  )
}

export default Navbar
