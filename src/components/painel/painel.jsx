import React, { useState } from 'react';
import TaskPainel from '../taskPainel/taskPainel';
import './painel.scss'

//redux
import {connect} from 'react-redux';
import {selectSelectedDate} from '../../redux/selectedDate/selectedDate.selector'
import {createStructuredSelector} from 'reselect'

function Painel({date}){

    {console.log("PAINEL > " + date
    )}
    const [tasks, setTasks] = useState(
        [{
            id : 1,
            title: "title 01",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"TODO",
            date: "09/08/2021"
        },
        {
            id : 2,
            title: "title 02",
            description:"description 02",
            status:"DONE",
            date: "09/08/2021"
        },
        {
            id : 3,
            title: "title 03",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"DONE",
            date: "09/08/2021"
        },
        {
            id : 9,
            title: "title 09",
            description:"description 09",
            status:"DONE",
            date: "09/08/2021"
        },
        {
            id : 10,
            title: "title 10",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"DONE",
            date: "09/08/2021"
        },
        {
            id : 11,
            title: "title 11",
            description:"description 11",
            status:"DONE",
            date: "09/08/2021"
        },
        {
            id : 12,
            title: "title 12",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"DONE",
            date: "09/08/2021"
        },
        {
            id : 4,
            title: "title 04",
            description:"description 04",
            status:"DOING",
            date: "09/08/2021"
        },
        {
            id : 5,
            title: "title 05",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"DOING",
            date: "08/08/2021"
        },
        {
            id : 6,
            title: "title 06 title 06 title 06 title 06",
            description:"description 06",
            status:"TODO",
            date: "08/08/2021"
        },
        {
            id : 7,
            title: "title 07",
            description:"description 07",
            status:"TODO",
            date: "07/08/2021"
        },
        {
            id : 8,
            title: "title 08",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"DONE",
            date: "07/08/2021"
        }]
    );

    return (
    <div className='painel'>
    <h1> Date   {date}</h1>
    <div className='painel-main'>
        <div className='painel-colunm'>
            <p className='type'>TODO</p>
            <div className='painel-colunm-tasks'>
                {tasks.map(task => (task.status == "TODO" && task.date == date ? <TaskPainel key={task.id} task = {task}/> : ''))}
            </div>
        </div>
        <div className='painel-colunm'>
            <p className='type'>DOING</p>
            <div className='painel-colunm-tasks'>
                {tasks.map(task => (task.status == "DOING" && task.date == date ? <TaskPainel key={task.id} task = {task}/> : ''))}
            </div>
        </div>
        <div className='painel-colunm'>
            <p className='type'>DONE</p>
            <div className='painel-colunm-tasks'>
                {tasks.map(task => (task.status == "DONE" && task.date == date ? <TaskPainel key={task.id} task = {task}/> : ''))}
            </div>
        </div>
    </div>
    </div>
    )
}
const mapStateToProps = createStructuredSelector({
    date : selectSelectedDate 
    })

 export default connect(mapStateToProps)(Painel)

