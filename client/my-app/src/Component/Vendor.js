import axios from 'axios';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Vendor.scss"


class Vendor extends Component {
    state ={
        jobsArray: [],
    }
    
  // handleChange = (event) => {
  //   this.setState({[event.target.name]: event.target.value},
 
  //    ) };

    //  isAccepted = () => {
    //    const accept = this.state.accept;
    //    if(accept === true) {
    //      return 
    //    }
    //    else return false;
    //  }

    //  isDeclined = () => {
    //    const decline = this.state.decline;
    //    if (decline === true) {
    //      alert("Thank you for reviewing the job! Don't worry next job is on its way")
    //    }
    //  }


   componentDidMount () {
       axios
       .get ('http://localhost:9000/reno')
       .then((response) => {
         console.log(response)
         this.setState({jobsArray:response.data})
          return response.data
       })
   }

   handleUpload =(e)=> {
     e.preventDefault()
     axios.post('http//localhost:9000/reno', {

     })
   }

   render() {
       console.log(this.state.jobsArray)

    return (
      <div>
   <form method="POST" onSubmit= {(e)=> this.handleUpload(e)} >
  
    <div className="navigation">
        <Link to="/"><img alt="logo" src='./RENO_LOGO.jpg'/></Link>
     </div>
        
        <div>
          <h1>Job Details </h1>
           
           <ul>
             <h3>Unit</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].unit : 'array empty'}
          </ul>
          <ul>
            <h3>Address</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].address : 'array empty'}
           </ul>

           <ul>
           <h3>City</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].city : 'array empty'}
           </ul>

           <ul>
           <h3>Province</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].province : 'array empty'}
           </ul>

           <h3>Country</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].country : 'array empty'}

           <h3>Rooms</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].rooms: 'array empty'}

           <h3>Bathrooms</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].bathrooms: 'array empty'}

           <h3>Area</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].sqft: 'array empty'}

           <h3>Color</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].color: 'array empty'}

           <h3>Color Coat</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].coat: 'array empty'}

           <h3>Comments</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].comment: 'array empty'}
           
        </div>

        
     
        <button type="submit" className="Accept">Accept Job</button>
        <input  name="quote" className="search__box" type="text" placeholder= "Quote" ></input>


        <button type="submit" className="Decline">Decline Job</button>

        </form>
      </div>
    )
   }
}

export default Vendor;