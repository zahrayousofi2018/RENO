import React, {Component} from 'react';
import './LandlordQuotes.scss'
import {Link} from "react-router-dom";
import axios from 'axios';
// import Vendorlist from "./Vendorlist";

class LandlordQuote extends Component {
  state ={
    quoteArray: [],
  }
  componentDidMount () {
    axios
    .get ('http://localhost:9000/quote')
    .then((response) => {
      console.log(response)
      this.setState({quoteArray:response.data})
       return response.data
    })
}


render() {
    return(
        <div className="LandlordQuote">

<div className="navigation">
        <Link to="/"><h1 className="reno__logo">RENO</h1></Link>
     {this.state.quoteArray}
       

      </div>
          
         <h1 className="landlord__quote__subtitle">Quote Status</h1>
          <div className="landlordQuote__container">
         
          {/* {this.state.jobsArray.map((elem) => (
                  <Vendorlist
                    id={elem.id}
                    address={elem.address}
                    unit={elem.unit}
                    jobtype={elem.jobtype}
                    city={elem.city}
                    province={elem.province}
                    country={elem.country}
                    propertytype={elem.propertytype}
                    rooms={elem.rooms}
                    bathroom={elem.bathroom}
                    sqft={elem.sqft}
                    color={elem.color}
                    coat={elem.coat}
                    comment={elem.comment}
                    quote={elem.quote}
                  />
                ))} */}
           
         

          </div>
           







        </div>
    )
}
}

export default LandlordQuote