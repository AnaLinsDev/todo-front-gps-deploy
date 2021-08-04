import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss'
import 'react-calendar/dist/Calendar.css';


function CalendarComponent({date}) {
  const [value, setValue] = useState(date);

return(
      <div className='calendar'>
      <Calendar
        onChange={setValue}
        value={value}
        showFixedNumberOfWeeks={true}
      />
      {console.log(value)}
      {/* <h1>{value.toDateString()}</h1>  */}
    </div>
)
}
export default CalendarComponent;