import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-links-wrapper">
                <Link to = '/' className = 'navLink' activeclassname="activeLink">Home      </Link>
                <Link to = '/convos' className = 'navLink' activeclassname="activeLink">Conversation       </Link>
                <Link to = '/about' className = 'navLink' activeclassname="activeLink">About Me </Link>
                {/* <Link to = '/targets' className = 'navLink' activeclassname="activeLink">Targets </Link> */}
            </div>
        </div>
    )
}

export default NavBar;