import React from 'react'
import "./Navbar.scss"
import {Link} from "react-router-dom";
// import FontAwesomeIcon from 'fontAwesomeIcon'


function Navbar() {
    return (
      <div className="navbar">
     
        <div className="nav__container">
          <Link to="/" className="HomePage">
        <h1 className= "reno"> RENO</h1>
        {/* <FontAwesomeIcon icon="fa-solid fa-house-building" /> */}
        </Link>
        </div>

        <div className="nav__container">
       <Link to="/HomeOwner" className="HomeOwner__link">
        <h2 className="dashboard"> HomeOwner</h2>
       </Link>
        </div>

        <div >
          <Link to="/Vendor" className="Vendor__link">
        <h2 className="dashboard">Vendor</h2>
        </Link>
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