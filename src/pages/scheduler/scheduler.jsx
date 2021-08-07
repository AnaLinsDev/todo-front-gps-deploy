import React, { Component } from 'react';
import './scheduler.scss'

import CalendarComponent from '../../components/calendar/calendar';
import Painel from '../../components/painel/painel';
import TaskPreview from '../../components/taskPreview/taskPreview'


const SchedulerPage = () => {


    return (
    <div className='scheduler'>
    <div className='calendar-task'>
        <CalendarComponent />
        <TaskPreview />
    </div>
    <Painel className='painel'/>
    </div>
    )
    }

   export default SchedulerPage
