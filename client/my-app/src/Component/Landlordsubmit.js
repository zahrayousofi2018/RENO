import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Landlordsubmit.scss';

class Landlordsubmit extends Component {

    render(){      
        return (
             <div className="landlord__submit__div">
                 <div className="navigation">
        <Link to="/"><h1 className="reno__logo">RENO</h1></Link>
    </div>

                 <div className="landlord__submit__container">
                  <h1>Thank you for submitting your request. Your quote is on its way.</h1>
                 </div>

             </div>


        )

}

}
export default Landlordsubmit;