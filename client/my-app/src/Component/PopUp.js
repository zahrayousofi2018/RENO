import React, {Component} from 'react'
import './PopUp.scss';

// function PopUp(props) {
//     return (props.trigger) ? (
//         <div className="popup">
//            <div className="popup-inner">
//                <button className="close-btn">close</button>
//                {props.children}
//            </div>
//         </div>
//     ) : ""; 
// }

// export default PopUp


export default class PopUp extends Component {
  
  handleClick = () => {
   this.props.toggle();
  };
render() {
  console.log("Hello")
  return (
   <div className="popup">
     <div className="popup-inner">
     <button className="close-btn" onClick={this.handleClick}>&times;</button>
     <p>Thank you for submitting your request. Your quote is on its way!</p>
    </div>
   </div>
  );
 }
}