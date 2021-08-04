import React from 'react';
import './taskPainel.scss'


const TaskPainel = ({task}) => (
    <div className='task-painel'>
     <h2>{task.title}</h2>
     <p>{task.description}</p>
    </div>
)

export default TaskPainel
