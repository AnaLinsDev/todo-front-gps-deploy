import React from 'react';
import './taskPainel.scss'


const TaskPainel = ({task}) => (
    <div className='task-painel'>
     <h1>{task.title}</h1>
     <p>{task.description}</p>
    </div>
)

export default TaskPainel
