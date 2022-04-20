import React, {Component} from 'react';
import './HomeOwner.scss'
// import Dropdown from 'react-dropdown';
// function HomeOwner () {

    class HomeOwner extends Component {
    render(){
    return (  
    <div>
<div>
    HomeOwner WorkSpace 
</div>
    <div> 
       <h4>Home</h4>
       <h4>Marketplace</h4>
       <h4>Inbox</h4>
    </div>

    <div>
       <h4>Properties</h4>
       <h4>Preferred Vendors</h4>
       <h4>Quote Requests</h4>
    </div>

<div>
   <h4>Welcome to the Vendor MarketPlace</h4>
   <p>Search for the vendors that serve your properties.</p>
   {/* <input>Search for a service</input>

   <input>Add property</input> */}
   <h4>Property Name</h4>
</div>

<div> 
    <input className="search__box" type="text" placeholder= "Unit" ></input>
    <input className="search__box" type="text" placeholder= "Address" ></input>
    <input className="search__box" type="text" placeholder= "Address" ></input>
    
    {/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
   
</div>

 
    </div>

    )
}
}

export default HomeOwner 