import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.scss'
import 'react-calendar/dist/Calendar.css';

import {connect} from 'react-redux';
import {selectSelectedDate} from '../../redux/date/date.selector'
import {createStructuredSelector} from 'reselect'
import { setSelectedDate } from '../../redux/date/date.actions';


function CalendarComponent({date, setSelectedDate}){
  
const [value, setValue] = useState(new Date())

setSelectedDate(value.toLocaleDateString())
  
return(
      <div className='calendar'>
      <Calendar
        onChange={setValue}
        value={value}
        showFixedNumberOfWeeks={true}
      />
      </div>
)
}

const mapStateToProps = createStructuredSelector({
   date : selectSelectedDate
})

const mapDispatchToProps = dispatch => ({
  setSelectedDate: date => dispatch( setSelectedDate(date) )
})


export default connect(mapStateToProps, mapDispatchToProps)(CalendarComponent)
