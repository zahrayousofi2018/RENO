import React, {Component} from 'react';
import "./Quote.scss"
import {Link} from "react-router-dom";


class MarketPlace extends Component {

    render(){  
        
        
        return (
             <div className="Quotes__container">

        <div className="navigation">
             <Link to="/"> <h1 className="logo">RENO</h1></Link>
        </div>


                 <h1> Quotes</h1>

                 <div className="">

               <div>
                     Unit Photos placeholder - Photos will be displayed here
               </div>

               <div>
                     <h1>Market Price for Similar Job </h1>

               </div>

             <div>
        

             <Link >
             <button type="submit" className="submit">Submit Quote</button>
             </Link>
             </div>

               <div>
                   

               </div>

               
               </div>


             </div>


        )

}

}
export default MarketPlace;