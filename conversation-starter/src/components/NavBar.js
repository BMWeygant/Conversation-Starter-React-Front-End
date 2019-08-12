import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navigationWrapper">
            <div className="linksWrapper">
                <Link to = '/' className = 'navLink' activeclassname="activeLink">Home </Link>
                {/* <Link to = '/initiators' className = 'navLink' activeclassname="activeLink">Initiators </Link> */}
                {/* <Link to = '/targets' className = 'navLink' activeclassname="activeLink">Targets </Link> */}
            </div>
        </div>
    )
}

export default NavBar;