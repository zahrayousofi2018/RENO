import React, {Component} from 'react';
import './HomeOwner.scss'
import {Link} from "react-router-dom";
import {Switch} from "react-router-dom";
import MarketPlace from './MarketPlace';


// import Dropdown from 'react-dropdown';

    class HomeOwner extends Component {
  
    render(){  
    return (  
    // <div>
    <div className="HomeOwner__main__div">

    <div className="navigation">
        <Link to="/"><h1 className="reno__logo">RENO</h1></Link>
        <div className="navigation">
        <Link to="/LandlordQuotes"><button className="quote__status">Quote Status</button> </Link>

      </div>

        {/* <Link><h4>Dashboard</h4></Link> */}
        {/* <Link to="/MarketPlace" className="MarketPlace__link"> <h4>Marketplace</h4></Link> */}
        {/* <Link> <h4>Quotes </h4></Link> */}
    </div>

    <div className="dyanmicPageContent">
        <Switch>
            {/* <Route path="/MarketPlace" component={MarketPlace}/> */}
            <MarketPlace/>
            {/* <Route path="/home" component={Home}/>  */}
        </Switch>
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

