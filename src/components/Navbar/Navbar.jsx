import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
           
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => window.location.href = "#home"}>Home</a></li>
            <li><a href="#about" onClick={() => window.location.href = "#about"}>About</a></li>   
            <li><a href="#Project" onClick={() => window.location.href = "Project"}>Projects</a></li>
            <li><a href="#contact" onClick={() => window.location.href = "#contact"}>Contact</a></li>
            </ul>
            <div className="nav-connect"><a href="#contact" onClick={() => window.location.href = "#contact"}>connect with me</a></div>
        </div>
    )
}

export default Navbar
