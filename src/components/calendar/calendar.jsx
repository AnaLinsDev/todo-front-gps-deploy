import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss'
import 'react-calendar/dist/Calendar.css';


function CalendarComponent() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calendar'>
      <Calendar
        onChange={onChange}
        value={value}
        showFixedNumberOfWeeks={true}

      />
      {console.log(value)}
      {/* <h1>{value.toDateString()}</h1>  */}
    </div>
  );
}

export default CalendarComponent;