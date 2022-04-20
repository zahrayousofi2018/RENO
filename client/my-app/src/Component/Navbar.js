import React from 'react'
import "./Navbar.scss"
import {Link} from "react-router-dom";


function Navbar() {
    return (
      <div className="navbar">
     
        <div className="nav__container">
        <h1 className= "reno"> RENO</h1>
        </div>

        <div className="nav__container">
       <Link to="/HomeOwner" className="HomeOwner__Link">
        <h2 className="dashboard"> HomeOwner</h2>
       </Link>
        </div>

        <div >
        <h2 className="dashboard">Vendor</h2>
        </div>

        {/* <div className="nav__container">
          <h2 className="dashboard"> Contact </h2>
        </div>

        <div className="nav__container">
      
        <button className="Login">Sign up</button>
        <button className="Login">Login</button>
      
        </div> */}
      </div>
    );
  }

  export default Navbar 