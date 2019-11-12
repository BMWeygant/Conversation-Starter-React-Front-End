import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {


    render(){

      return(
        <div className="home-page">
          <h1>Welcome</h1>
          <Link to = "/convos" className='logo-link' activeclassname="activeLink"><img src= "https://challengingbehavior.cbcs.usf.edu/images/Logos/NCPMI_LetsTalk_logo.png" alt="home-pic"/></Link>
        </div>

      )

    }

}
