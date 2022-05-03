import React, { useState } from "react";
import { render } from 'react-dom';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Calender.scss";



const Calender = () => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    return (
      <div className="calendar">
          <Calendar 
          onChange={onChange} 
          value={date}/>
          {date.toDateString()}
      </div>
    )
};

export default Calender;

render(<Calendar/>, document.querySelector("#root"));