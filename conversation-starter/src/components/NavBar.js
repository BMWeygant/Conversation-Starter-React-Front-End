import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navigationWrapper">
            <div className="linksWrapper">
                <Link to = '/' className = 'navLink' activeclassname="activeLink">Home</Link> <br />
                <Link to = '/convos' className = 'navLink' activeclassname="activeLink">Conversation</Link>
                <Link to = '/about' className = 'navLink' activeclassname="activeLink">About Me </Link>
                {/* <Link to = '/targets' className = 'navLink' activeclassname="activeLink">Targets </Link> */}
            </div>
        </div>
    )
}

export default NavBar;