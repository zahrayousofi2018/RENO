import React from 'react'
import './Frontpage.scss'
import {Link} from "react-router-dom";
// import Navbar from './Component/Navbar'
import {AiOutlineHome } from 'react-icons/ai'

function FrontPage() {
    return (
      <div className="frontpage__container">

        {/* <Navbar/> */}
        <AiOutlineHome className="reno___logo"/>
       <h1 className="reno">RENO</h1>

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