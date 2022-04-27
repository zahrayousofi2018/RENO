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
           <tr className="joblist__row">
           <td className="joblist__unit">

             <h4>Unit</h4>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].unit : 'array empty'}
          
          </td>
          <td>
            <h3>Address</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].address : 'array empty'}
           </td>

          <td>
           <h3>City</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].city : 'array empty'}
           </td>

           <td>
           <h3>Province</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].province : 'array empty'}
           </td>

            <td>
           <h3>Country</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].country : 'array empty'}
           </td>

           <td>

           <h3>Rooms</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].rooms: 'array empty'}

           </td>

           <td>

           <h3>Bathrooms</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].bathrooms: 'array empty'}
           </td>

           <td>
           <h3>Area</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].sqft: 'array empty'}
           </td>

           <td>

           <h3>Color</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].color: 'array empty'}
           </td>

           <td>

           <h3>Color Coat</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].coat: 'array empty'}
            </td>

            {/* <td>

           <h3>Comments</h3>
           {this.state.jobsArray.length > 1 ? this.state.jobsArray[0].comment: 'array empty'}
           </td> */}

             <td>
               <h3>Status</h3>
             <button type="submit" className="Accept">Accept Job</button>
       


   
             </td>

             <td>
             <button type="submit" className="Decline">Decline Job</button>
             </td>


           </tr>
           
        </div>

        
     
     

        </form>
      </div>
    )
   }
}

export default Vendor;