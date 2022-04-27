import React, {Component} from 'react';
import './MarketPlace.scss'
import axios from 'axios'

class MarketPlace extends Component {
  state = {
      id: "",
      jobtype: "",
      unit: "",
      address: "",
      city: "",
      province: "",
      country: "",
      propertytype: "",
      rooms: "",
      bathroom: "",
      sqft: "",
      color: "",
      coat: "",
      comment: "",
      quote: "",

  }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value},
            )
    };


    message () {
        this.setState({
            message: 'Thank you for submitting your request!'
        })
    }

    handleUpload =(e)=> {
        axios
        .post(`http://localhost:9000/reno`, {
            
            id: this.state.id,
            jobtype: this.state.jobtype,
            unit: this.state.unit,
            address: this.state.address,
            city: this.state.city,
            province: this.state.province,
            country: this.state.country,
            propertytype: this.state.propertytype,
            rooms: this.state.rooms,
            bathroom: this.state.bathroom,
            sqft: this.state.sqft,
            color: this.state.color,
            coat: this.state.coat,
            comment: this.state.comment,
            quote: this.state.quote,
      
           
        });
    };

    
    render(){      
    return (  
        <div className="MarketPlace__container">
            <form method="POST" onSubmit={(e) => this.handleUpload(e)}>
        <div>
        <h4>Welcome to the Vendor MarketPlace</h4>

        <p>Search for the vendors that serve your properties.</p>
        <input value={this.state.jobtype} onChange= {this.handleChange} name="jobtype" className="search__box" type="text" placeholder="Search for a service"></input>
      
        <h4>Property Details</h4>
       </div>
     
       <div> 
      
         <input value={this.state.unit} onChange={this.handleChange} name="unit" className="search__box" type="text" placeholder= "Unit" ></input>
         <input value={this.state.address} onChange={this.handleChange} name="address" className="search__box" type="text" placeholder= "Address" ></input>
         <input value={this.state.city} onChange={this.handleChange} name="city" className="search__box" type="text" placeholder= "city" ></input>
         <input value={this.state.province} onChange={this.handleChange} name="province" className="search__box" type="text" placeholder= "province" ></input>
         <input value={this.state.country} onChange={this.handleChange} name="country" className="search__box" type="text" placeholder= "country" ></input>
         <input value={this.state.propertyType} onChange={this.handleChange} name="propertyType" className="search__box" type="text" placeholder= "Property Type" ></input>
         <input value={this.state.rooms} onChange={this.handleChange} name="rooms" className="search__box" type="text" placeholder= "# Rooms" ></input>
         <input value={this.state.bathroom} onChange={this.handleChange} name="bathroom" className="search__box" type="text" placeholder= "# Bathrooms" ></input>
         <input value={this.state.sqft} onChange={this.handleChange} name="sqft" className="search__box" type="text" placeholder= "Area sq.ft" ></input>
         <input value={this.state.paintColor} onChange={this.handleChange} name="paintColor" className="search__box" type="text" placeholder= "paint color" ></input>
         <input value={this.state.paintCoat} onChange={this.handleChange} name="paintCoat" className="search__box" type="text" placeholder= "# coat of paint" ></input>
         <textarea value={this.state.comment} onChange={this.handleChange} name="comment" className="search__box" type="text" placeholder= "Comments"></textarea>
     </div>
     
     
     <div>
         <button onClick ={() => this.message()}>Search Marketplace</button>
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
      </form>
     </div>
   


    )
    }
    }
    
export default MarketPlace;