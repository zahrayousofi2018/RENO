import React, {Component} from 'react';
import './LandlordQuotes.scss'
import {Link} from "react-router-dom";

class LandlordQuote extends Component {

render() {
    return(
        <div className="LandlordQuote">

<div className="navigation">
        <Link to="/"><h1 className="reno__logo">RENO</h1></Link>
    
       

      </div>
          
         <h1 className="landlord__quote__subtitle">Quote Status</h1>
          <div className="landlordQuote__container">
         

           
         

          </div>
           







        </div>
    )
}
}

export default LandlordQuote