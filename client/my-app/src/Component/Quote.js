import React, {Component} from 'react';
import "./Quote.scss"
import {Link} from "react-router-dom";
import ImageSlider from './ImageSlider';
import {SliderData} from './SlideData';


class Quote extends Component {

    render(){  
        
        
        return (
             <div className="Quotes__container">

        <div className="navigation">
             <Link to="/"> <h1 className="logo">RENO</h1></Link>
        </div>


             <h1 className="quote__subtitle"> Quotes</h1>

            <div className="quote__main__div">

                 <div>
                      <ImageSlider slides={SliderData}/>
                 </div>

               <div className="quote__container">
               <h4 className="quote__marketprice__header">Market Price for Similar Jobs</h4>
               
               <p className="quote__data">$2000  April, 27th, 2022</p> 
               <p className="quote__data">$2100  April, 29th, 2022</p>  
               <p className="quote__data">$2050  April, 21th, 2022</p> 
               <p className="quote__data">$2100  April, 25th, 2022</p> 
               <p className="quote__data">$2000  May, 1st, 2022</p> 

              

               <h4 className="quote__marketprice__header">Recommended Price</h4>
               <p className="quote__data">$2050</p>

               </div>
               

               <div className="quote__input">
              
               <input name="address" className="search__box" type="text" placeholder= "Quote" ></input>
               </div>

             <div>
        

             <Link to="/Vendor" >
             <button type="submit" className="submit__quote">Submit Quote</button>
             </Link>
             </div>

               <div>
                   

               </div>

               
               </div>


             </div>


        )

}

}
export default Quote;