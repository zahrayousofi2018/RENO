import React, {Component} from 'react';
import './HomeOwner.scss'
import {Link} from "react-router-dom";

import MarketPlace from './MarketPlace';




    class HomeOwner extends Component {
  
    render(){  
    return (  
 
    <div className="HomeOwner__main__div">

        <div className="nav">
            <div className="nav__container">
        <Link to="/"><h1 className="reno__logo">RENO</h1></Link>
        </div>
        <div className="nav__container">
        <Link to="/LandlordQuotes"><button className="quote__status">Quote Status</button> </Link>  
          </div>  
        </div>

    <div className="dyanmicPageContent">
      
            <MarketPlace/>
      
    </div>

 </div>
     

    )
}
}

export default HomeOwner 



//  <div className="HomeownerPage">
//     <div className="navigation">
//         <Link>Reno</Link>
//         <Link>Home</Link>
//         <Link>Marketplace</Link>
//         <Link>Inbox</Link>
//         <Link>Properties</Link>
//         <Link>Quotes</Link>
//     </div>

//     <div className="dyanmicPageContent">
//         <Switch>
//             <Route path="/reno" component={Reno}/>
//             <Route path="/home" component={Home}/> 
//             ....
//         </Switch>
//     </div>
// <div> 

//   <div className="nav__bar">
//         Reno 
//     </div>

//      <div className="marketplace"> 
//         <h4>Home</h4>
//         <Link to="/MarketPlace" className="MarketPlace">
//         <h4>Marketplace</h4>
//        </Link>
//      </div>

//     <div>
//             <h4>Inbox</h4>
//        <h4>Properties</h4>
//        <h4>Quote Requests</h4>
//     </div>
//   </div>
//   <div className="homeOwner__container">
//         <div className="dashboard">
//         Dashboard 
//        </div> 
   

//   </div> 

//    </div> 

