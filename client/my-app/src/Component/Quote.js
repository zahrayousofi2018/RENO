import React, {Component} from 'react';
import "./Quote.scss"
import {Link} from "react-router-dom";
import ImageSlider from './ImageSlider';
import {SliderData} from './SlideData';
import axios from "axios";
import {AiOutlineHome } from 'react-icons/ai'

class Quote extends Component{
     state ={
          quotes: [],
          quote: {
               id: "",
               quote: "",
          },
        }

     componentDidMount () {
          axios
          .get ('http://localhost:9000/quote')
          .then((response) => {
            this.setState({quotes:response.data})
             return response.data
          })
      }
     

      handleSubmit =(e) => {
           e.preventDefault()
           console.log(this.state.quote)           
               axios.post(`http://localhost:9000/quote`, {   
                    id: this.state.quote.id,
                    quote: this.state.quote.quote,
              // ...this.state.quote,
               })

           }

           handleChange = (event) => {
               // console.log(event.target.name)
               ///this.setState({"id": 5, [event.target.name]: event.target.value})};
               this.setState(prevState => ({
                  // object that we want to update
                        ...prevState.quotes,    // keep all other key-value pairs
                        quote: {
                             id: this.props.location.id,
                             quote: event.target.value,
                        }      // update the value of specific key
                    }))
                };
     
    render(
         
    ){ 
      console.log("this is props", this.props);
        
        return (
        <div className="Quotes__container">
        <div className="navigation">
        <AiOutlineHome className="reno__logo"/>
             <Link to="/"> <h1 className="logo">RENO</h1></Link>
        </div>
             <h1 className="quote__subtitle"> Quotes</h1>
        <div>
              <ImageSlider slides={SliderData}/>
        </div>
        <div className="quote__main__div">

               <div className="quote__container">
               <h4 className="quote__marketprice__header">Market Price for Similar Jobs</h4>
               <p className="quote__data">$2000  April, 27th, 2022</p> 
               <p className="quote__data">$2100  April, 29th, 2022</p>  
               <p className="quote__data">$2050  April, 21th, 2022</p> 
               <p className="quote__data">$2100  April, 25th, 2022</p> 
               <p className="quote__data">$2000  May, 1st, 2022</p> 
               </div>
              
               <div className="quote__container">
               <h4 className="quote__marketprice__header">Recommended Price</h4>
               <p className="quote__data">$2050</p>

               </div>
               {/* <div className="quote__input"> */}
               <div >
               <input onChange={this.handleChange} name="quote" className="search___box" type="text" placeholder= "Quote" ></input>
               {/* </div> */}
              
       
             {/* <Link to="/Vendor" > */}
             <button onClick={(e) => this.handleSubmit(e)} type="submit" className="submit__quote">Submit Quote</button>
          
             {/* </Link> */}
             </div>
               <div>
               </div>          
               </div>
             </div>
        )

}

}
export default Quote;