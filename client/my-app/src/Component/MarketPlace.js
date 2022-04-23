import React, {Component} from 'react';
import './MarketPlace.scss'
import axios from 'axios'

class MarketPlace extends Component {
    render(){      
    return (  
        <div className="MarketPlace__container">
        <div>
        <h4>Welcome to the Vendor MarketPlace</h4>
        <p>Search for the vendors that serve your properties.</p>
        <input className="search__box" type="text" placeholder="Search for a service"></input>
      
        <h4>Property Details</h4>
       </div>
     
       <div> 
         <input className="search__box" type="text" placeholder= "Unit" ></input>
         <input className="search__box" type="text" placeholder= "Address" ></input>
         <input className="search__box" type="text" placeholder= "Property Type" ></input>
         <input className="search__box" type="text" placeholder= "# Rooms" ></input>
         <input className="search__box" type="text" placeholder= "# Bathrooms" ></input>
         <input className="search__box" type="text" placeholder= "Area sq.ft" ></input>
         <input className="search__box" type="text" placeholder= "paint color" ></input>
         <input className="search__box" type="text" placeholder= "# coat of paint" ></input>

     </div>
     
     
     <div>
         <button>Search Marketplace</button>
     </div>

<div className="marketplace__steps__div">
     <div>
         <button className="marketplace__steps">1</button>
         <p>Search</p>
         <p>Browse our marketplace for a service that best fits your work.</p>
     </div>

     <div>
         <button className="marketplace__steps">2</button>
         <p>Review</p>
         <p>Review ratings from fellow landlords to make your selection.</p>
     </div>

     <div>
     <button className="marketplace__steps">3</button>
         <p>Request</p>
         <p>Submit your selection to request quotes from selected vendors.</p>
     </div>

     </div>

     </div>
   


    )
    }
    }
    
export default MarketPlace;