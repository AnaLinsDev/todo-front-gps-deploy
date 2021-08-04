import React, { Component } from 'react';
import './scheduler.scss'

import CalendarComponent from '../../components/calendar/calendar';
import Painel from '../../components/painel/painel';
import TaskPreview from '../../components/taskPreview/taskPreview'


class SchedulerPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDate: new Date()
      };
    }
render() {
    {console.log("SCHEDULER > " + this.state.selectedDate)}

    return (
    <div className='scheduler'>
    <div className='calendar-task'>
        <CalendarComponent date={this.state.selectedDate}/>
        <TaskPreview />
    </div>
    <Painel date={this.state.selectedDate} className='painel'/>
    </div>
    )
}
    }

export default SchedulerPage