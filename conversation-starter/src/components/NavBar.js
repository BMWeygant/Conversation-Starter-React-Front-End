import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-links-wrapper">
                <Link to = '/' className = 'logo-navLink' activeclassname="activeLink"><img src= "https://challengingbehavior.cbcs.usf.edu/images/Logos/NCPMI_LetsTalk_logo.png" height='50px' alt="home-pic"/></Link>
                <Link to = '/convos' className = 'navLink' activeclassname="activeLink">Conversation       </Link>
                <Link to = '/about' className = 'navLink' activeclassname="activeLink">About Me </Link>
            </div>
        </div>
    )
}

export default NavBar;