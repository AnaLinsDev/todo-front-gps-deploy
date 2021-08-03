import React, { useState } from 'react';
import TaskPainel from '../taskPainel/taskPainel';
import './painel.scss'


function Painel(){

    const [tasks, setTasks] = useState(
        [{
            title: "title 01",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status:"TODO",
            data: "03/04/2021"
        },
        {
            title: "title 02",
            description:"description 02",
            status:"DONE",
            data: "03/04/2021"
        },
        {
            title: "title 03",
            description:"description 03",
            status:"DONE",
            data: "03/04/2021"
        },
        {
            title: "title 04",
            description:"description 04",
            status:"DOING",
            data: "03/04/2021"
        },
        {
            title: "title 05",
            description:"description 05",
            status:"DOING",
            data: "03/04/2021"
        },
        {
            title: "title 06",
            description:"description 06",
            status:"TODO",
            data: "03/04/2021"
        },
        {
            title: "title 07",
            description:"description 07",
            status:"TODO",
            data: "03/04/2021"
        },
        {
            title: "title 08",
            description:"description 08",
            status:"DONE",
            data: "03/04/2021"
        }]
    );

    return (
    <div className='painel'>
    PAINEL AQUI
    <div className='painel-main'>
        <div className='painel-colunm'>
            <p className='type'>TODO</p>
            <div className='painel-colunm-tasks'>
                {tasks.map(task => (task.status == "TODO" ? <TaskPainel task = {task}/> : ''))}
            </div>
        </div>
        <div className='painel-colunm'>
            <p className='type'>DOING</p>
            <div className='painel-colunm-tasks'>
                {tasks.map(task => (task.status == "DOING" ? <TaskPainel task = {task}/> : ''))}
            </div>
        </div>
        <div className='painel-colunm'>
            <p className='type'>DONE</p>
            <div className='painel-colunm-tasks'>
                {tasks.map(task => (task.status == "DONE" ? <TaskPainel task = {task}/> : ''))}
            </div>
        </div>
    </div>
    </div>
    )
}

export default Painel