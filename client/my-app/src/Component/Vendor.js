import axios from 'axios';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Vendor.scss"
import Vendorlist from "./Vendorlist";



class Vendor extends Component {
    state ={
        jobsArray: [],
        filterData: [],
    }


   componentDidMount () {
       axios
       .get ('http://localhost:9000/reno')
       .then((response) => {
         console.log(response)
         this.setState({jobsArray:response.data})
          return response.data
       })
   }
    

    getFilterData = (e) =>  {
      console.log(e.target.value)
      if (e.target.value === "Paint") {
       let filteredData = this.state.jobsArray.filter((data) => {
          return data.jobtype === "Paint" 
        })

        this.setState({
          ...this.state,
          filterData: filteredData
        })
      }

      if (e.target.value === "Cleaning") {
        let filteredData = this.state.jobsArray.filter((data) => {
           return data.jobtype === "Cleaning" 
         })

         this.setState({
          ...this.state,
          filterData: filteredData
        })
       }

       if (e.target.value === "Flooring") {
        let filteredData = this.state.jobsArray.filter((data) => {
           return data.jobtype === "Flooring" 
         })

         this.setState({
          ...this.state,
          filterData: filteredData
        })
       }

       if (e.target.value === "Inspection") {
        let filteredData = this.state.jobsArray.filter((data) => {
           return data.jobtype === "Inspection" 
         })

         this.setState({
          ...this.state,
          filterData: filteredData
        })
       }

       if (e.target.value === "Renovation") {
        let filteredData = this.state.jobsArray.filter((data) => {
           return data.jobtype === "Renovation" 
         })
         this.setState({
          ...this.state,
          filterData: filteredData
        })

       }

      //  if (e.target.value === "Jobs") {
      //    this.setState({
      //     ...this.state,
      //     jobsArray: filteredData
      //   })

      //  }
    
    }



   render() {
       console.log(this.state.jobsArray)
       console.log(this.state.filterData)
    return (
      <div className="vendor__main__div">

  
      <div className="navigation">
          <Link to="/"> <h1 className="logo">RENO</h1></Link>
      </div>
        
      <div className="vendor__div__container">
        <h1 className="vendor__dashboard" >Welcome to Vendor Dashboard</h1>

        <h2 className="vendor__subtitle">Select Jobtype</h2>
        <select onChange={(e) => this.getFilterData(e)}>
            <option className="vendor__form__option" hidden displayed value="N/A"> Please Select</option>
            <option onChange={() => this.getFilterData()} className="vendor__form__option" value="Jobs">Jobs</option>
            <option  className="vendor__form__option" value="Paint" >Paint</option>
            <option  className="vendor__form__option" value="Cleaning" >Cleaning</option>
            <option  className="vendor__form__option" value="Flooring" >Flooring</option>
            <option  className="vendor__form__option" value="Renovation">Full House Renovation</option>
          </select>

          <tr className="joblist__row">
          </tr> 
          {this.state.filterData.length > 0 ? 
                this.state.filterData.map((elem) => (
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
                  />
                ))
              :
                this.state.jobsArray.map((elem) => (
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
                  />
                ))
              }
          </div>
        </div>
    )
  }
}

export default Vendor;