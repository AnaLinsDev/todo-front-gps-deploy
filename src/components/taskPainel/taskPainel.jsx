import React from 'react';
import './taskPainel.scss'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import { RiReplyLine } from "react-icons/ri";

const TaskPainel = ({task}) => (
    <div className='task-painel'>
    
    {
    task.status != "TODO"
     ? 
    <div className = 'icons-sup'>
    <RiReplyLine className='undone icon' /> 
    <HiCheck className='done icon'/>
    </div>
    : 
    <div className = 'icons-sup-right'>
    <HiCheck className='done icon'/>
    </div>
    }

     <h2>{task.title} </h2>
     <p>{task.description}</p>
     <div className = 'icons-inf'>
     <RiDeleteBin5Line className='delete icon'/>
     <BiEditAlt  className='update icon'/>
     </div>
    </div>
)

export default TaskPainel
