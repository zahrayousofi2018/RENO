import React, {Component} from 'react';
import './LandlordQuotes.scss'
import {Link} from "react-router-dom";
import axios from 'axios';
import Vendorlist from "./Vendorlist";

class LandlordQuote extends Component {
    state = {
      jobsArray: [],
      quotes: [],
      quote: {
        id: "",
        quote: "",
   },
  }
  
    componentDidMount () {
    
    axios
    .get ('http://localhost:9000/reno')
    .then((response) => {
      console.log(response)
      this.setState({jobsArray:response.data})
       return response.data
    });

    axios
    .get ('http://localhost:9000/quote')
    .then((response) => {
      console.log(response)
      this.setState({quotes:response.data})
       return response.data
    })

  }

   getQuote = () => {
  

    if (this.state.jobsArray.id === this.state.quotes.id) {
       console.log("HI")
       console.log(this.state.quotes[0].quote)
    }

  }





//get request for reno 
// get request for quote 

//if statement (for every quote, get the id - if the id exist in reno, get. If not, null)


render() {
    return(
        <div className="LandlordQuote">

<div className="navigation">
        <Link to="/"><h1 className="reno__logo">RENO</h1></Link>
    
      </div>
          
         <h1 className="landlord__quote__subtitle">Quote Status</h1>
          <div className="landlordQuote__container">
            
           
{/*          
            {this.state.jobsArray.map((elem) => (
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
                    quotes={elem.quote}
                   
                  />
                ))} 

                {this.state.quotes.quote}

               {this.getQuote} */}
          </div>
           

        </div>
    )
}
}

export default LandlordQuote