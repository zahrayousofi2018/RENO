import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class Vendor extends Component {
   render() {
    return (
      <div>

<div className="navigation">
        <Link to="/"><img alt="logo" src='./RENO_LOGO.jpg'/></Link>

        {/* <Link><h4>Dashboard</h4></Link> */}
        {/* <Link to="/MarketPlace" className="MarketPlace__link"> <h4>Marketplace</h4></Link> */}
        {/* <Link> <h4>Quotes </h4></Link> */}
    </div>
        
        <div>
          <h1>Unit Details </h1>
          

        </div>

        

        <button>Accept Job</button>


        <button>Decline Job</button>


      </div>
    )
   }
}

export default Vendor;