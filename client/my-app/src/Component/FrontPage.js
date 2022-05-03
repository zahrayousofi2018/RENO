import React from 'react'
import './Frontpage.scss'
import {Link} from "react-router-dom";
// import Navbar from './Component/Navbar'


function FrontPage() {
    return (
      <div className="frontpage__container">

        {/* <Navbar/> */}
       <h3 className="frontpage__text">Property Management Software</h3>

       <h1 className="frontpage__message">Modernize how you renovate your home! </h1>
       <Link to="/HomeOwner" className="SignUp__link">
       <button className="SignUp">Landlord</button>
       </Link>
       <Link to="/Vendor" className="Vendor__link">
       <button className="Login">Vendor</button>
       </Link>
      </div>
    );
  }

  export default FrontPage