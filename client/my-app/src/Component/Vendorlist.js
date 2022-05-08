import React, { Component } from "react";
import './Vendorlist.scss'
import {Link, Redirect} from "react-router-dom"; 


export default class Vendorlist extends Component {
        state= {

        }

    render() {
        let {id,
            jobtype,
            unit,
            address, 
            city,
            province,
            country,
            propertytype,
            rooms,
            bathroom,
            sqft,
            color,
            coat,
            // comment,
             } = this.props;
          
        return(

            <tr className="vendorlist__row" id={id}>
             
             <div className="vendor__div">
             <td className="vendorlist__jobtype">
               
              <h4 className="vendorlist__subtitle">Job Type</h4>
              <Link to="/Quote">
              <p className="vendorlist__text">
                {jobtype}
              </p>
              </Link>
            </td>
           


            <td className="vendorlist__unit">
              <h4 className="vendorlist__subtitle">Unit</h4>
              <div className="vendorlist__item">
          
                 
                  <p className="vendorlist__text">{unit}</p>
           
               
              </div>
            </td>

            
    
            <td className="vendorlist__address">
              <h4 className="vendorlist__subtitle">Address</h4>
              <p className="vendorlist__text">
                {address}
              </p>
            </td>

            
            <td className="vendorlist__city">
              <h4 className="vendorlist__subtitle">City</h4>
              {/* <p
                className={`inventory__status--text ${
                  status === "Out of Stock" ? "outOfStock" : "inStock"
                }`}
              >
                {" "}
                {status}{" "}
              </p> */}

              <p className="vendorlist__subtitle">

            {city}
            </p>
            </td>
    
            <td className="vendorlist__province">
              <h4 className="vendorlist__subtitle">Province</h4>
              <p className="vendorlist__text">{province}</p>
            </td>
    
            <td className="vendorlist__country">
              <h4 className="vendorlist__subtitle">Country</h4>
              <p className="vendorlist__text">{country}</p>
            </td>
    
            <td className="vendorlist__property">
              <h4 className="vendorlist__subtitle">Property Type</h4>
              <p className="vendorlist__text">{propertytype}</p>
            </td>

            <td className="vendorlist__rooms">
              <h4 className="vendorlist__subtitle">Rooms</h4>
              <p className="vendorlist__text">{rooms}</p>
            </td>

            <td className="vendorlist__bathroom">
              <h4 className="vendorlist__subtitle">Bathroom</h4>
              <p className="vendorlist__text">{bathroom}</p>
            </td>

            <td className="vendorlist__area">
              <h4 className="vendorlist__subtitle">Area</h4>
              <p className="vendorlist__text">{sqft}</p>
            </td>

            <td className="vendorlist--color">
              <h4 className="vendorlist__subtitle">Color</h4>
              <p className="vendorlist__text">{color}</p>
            </td>

            <td className="vendorlist__paint">
              <h4 className="vendorlist__subtitle">Paint Coat</h4>
              <p className="vendorlist__text">{coat}</p>
            </td>

            {/* <td className="vendorlist__comment">
              <h4 className="vendorlist__subtitle">Comment</h4>
              <p className="vendorlist__text">{comment}</p>
            </td> */}

            {/* <td className="vendorlist__quote">
              <h4 className="vendorlist__subtitle">Quote</h4>
              <p className="vendorlist__text">{quote}</p>
            </td> */}


            <td>
              <h3 className="vendorlist__subtitle">Status</h3>
              <Link to={{
              pathname: '/Quote',
                id:id }
              }>
             <button type="submit" className="Accept">Accept Job</button>
                  
              </Link>

             <Link >
           
             <button type="submit" className="Decline">Decline Job</button>
             </Link>
             </td>
          
          
          
           <hr className="line__break"></hr>



           </div>
    
            
          </tr>



        )
    }
}