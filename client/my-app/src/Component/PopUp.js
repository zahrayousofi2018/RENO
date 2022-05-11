import React, {Component} from 'react'
import './PopUp.scss';


export default class PopUp extends Component {
  
  handleClick = () => {
   this.props.toggle();
  };

  onClose = e => {
    this.props.seen = false;
  };

render() {
  console.log("Hello")
  return (
   <div className="popup">
     <div className="popup-inner">
     {/* <button className="close-btn" onClick={this.handleClick}>&times;</button> */}
     {/* <button className="close-btn" onClick={() => this.props.togglePop(true)} ></button> */}
     <button onClose={e => {this.onClose(e)}}>Close</button>
     <p>Thank you for submitting your request. Your quote is on its way!</p>
    </div>
   </div>
  );
 }
}