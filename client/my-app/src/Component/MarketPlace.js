import React, {Component} from 'react';
import './MarketPlace.scss'
import axios from 'axios'
// import {Link} from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import PopUp from './PopUp';


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
      date: new Date(),
      seen: false,
  }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value},
            )
    };


    // message () {
    //     this.setState({
    //         message: 'Thank you for submitting your request!'
    //     })
    // }

    handleUpload =(e)=> {
        e.preventDefault()
        console.log("Hi")
        this.setState ({
            seen: !this.state.seen
        });

        axios
        .post(`http://localhost:9000/reno`, {
            
            id: this.state.id,
            jobtype: this.state.jobtype,
            unit: this.state.unit,
            address: this.state.address,
            city: this.state.city,
            province: this.state.province,
            country: this.state.country,
            propertyType: this.state.propertyType,
            rooms: this.state.rooms,
            bathroom: this.state.bathroom,
            sqft: this.state.sqft,
            color: this.state.color,
            coat: this.state.coat,
            comment: this.state.comment,
            quote: this.state.quote,
            date: this.state.date,
           
      
           
        });
    };

  
   onChange = date => {
       this.setState({date}
       )
    }

   
//    togglePop = () => {
//        console.log("Hi")
//        this.setState ({
//            seen: !this.state.seen
//        });
//    };

 

    
    render(){ 
        console.log(this.state.seen)     
    return (  
        <div className="MarketPlace__container">
            <form method="POST" onSubmit={(e) => this.handleUpload(e)}>
            {/* <form method="POST"> */}
        <div className="vendor__detail__container">
        <h4 className="welcome__to__vendor__marketplace">Welcome to the Vendor Marketplace</h4>

        <p className="vendor__subtitle">Search for the vendors that serve your properties.</p>
        <label className="vendor__list" for="catagory"></label>
        <select value={this.state.jobtype} onChange= {this.handleChange} name="jobtype" className="search__box" type="text" placeholder="Category" class="vendor__list__item" id="catagory">
            <option className="vendor__form__option" hidden displayed value="N/A"> Please Select Your Jobtype</option>
            <option className="vendor__form__option" value="Paint" >Paint</option>
            <option className="vendor__form__option" value="Flooring" >Flooring</option>
            {/* <option className="vendor__form__option" value="Inspection">Cleaning</option> */}
            <option className="vendor__form__option" value="Renovation">Renovation</option>
            </select>
     
      
       </div>
       <div className="property__detail">

        <h4> Property Details </h4>
       </div>
     
       <div className="input__container"> 
    
         <input value={this.state.unit} onChange={this.handleChange} name="unit" className="search__box" type="text" placeholder= "Unit" ></input>



         <input value={this.state.address} onChange={this.handleChange} name="address" className="search__box" type="text" placeholder= "Address" ></input>
         <input value={this.state.city} onChange={this.handleChange} name="city" className="search__box" type="text" placeholder= "city" ></input>
         <input value={this.state.province} onChange={this.handleChange} name="province" className="search__box" type="text" placeholder= "Province" ></input>
         <input value={this.state.country} onChange={this.handleChange} name="country" className="search__box" type="text" placeholder= "Country" ></input>
         <input value={this.state.propertyType} onChange={this.handleChange} name="propertyType" className="search__box" type="text" placeholder= "Property Type" ></input>
         <input value={this.state.rooms} onChange={this.handleChange} name="rooms" className="search__box" type="text" placeholder= "# Rooms" ></input>
         <input value={this.state.bathroom} onChange={this.handleChange} name="bathroom" className="search__box" type="text" placeholder= "# Bathrooms" ></input>
         <input value={this.state.sqft} onChange={this.handleChange} name="sqft" className="search__box" type="text" placeholder= "Area sq.ft" ></input>
         <input value={this.state.color} onChange={this.handleChange} name="color" className="search__box" type="text" placeholder= "Paint Color" ></input>
         <input value={this.state.coat} onChange={this.handleChange} name="coat" className="search__box" type="text" placeholder= "# Coat of Paint" ></input>
         {/* <input value={this.state.comment} onChange={this.handleChange} name="comment" className="search__box" type="text" placeholder= "Comments"></input> */}
         <input value={this.state.date} name="date" className="search__box" type="text" placeholder= "Due Date"  ></input>
         <div className="calendar">
         <Calendar  onChange={(e)=>{this.onChange(e)}} value={this.state.date}/>
          {this.state.date.toDateString()}
          </div>
         
     </div>

     
     
     {/* <Link to="/Landordsubmit"> */}
     {/* <div> */}
         {/* <div className= "btn" onClick={this.togglePop}> */}
         <button type="submit" className="marketplace__search__button">Search Marketplace</button>
        
         {/* </div> */}
        
         {/* <PopUp trigger = {false}>
             <p>Thank you for submitting your request. Your quote is on its way!</p>
         </PopUp> */}
          

     {/* </div> */}
     {/* </Link> */}
     </form>

     {this.state.seen ? <PopUp toggle={this.togglePop}  /> : null}

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