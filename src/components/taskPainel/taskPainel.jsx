import React from 'react';
import './taskPainel.scss'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import { RiReplyLine } from "react-icons/ri";

//redux
import { connect } from 'react-redux';
import { removeTask } from '../../redux/tasks/tasks.actions';

function TaskPainel({task, removeTask}){

    const handleRemoveClick = (task) => {
        console.log(JSON.stringify(task))

        fetch('http://localhost:8080/task/deletetask',
         { method: 'DELETE' , body: JSON.stringify(task)})
         .then(res => console.log(res))
      }


    return (
    <div className='task-painel'>
    {
    task.status != "TODO"
     ? 
    <div className = 'icons-sup'>
    <RiReplyLine className='undone icon' /> 
    <HiCheck className='done icon' />
    </div>
    : 
    <div className = 'icons-sup-right'>
    <HiCheck className='done icon'/>
    </div>
    }

     <h2>{task.title} </h2>
     <p>{task.description}</p>
     <div className = 'icons-inf'>

     <RiDeleteBin5Line className='delete icon' 
     onClick={() => handleRemoveClick(task)} />

     <BiEditAlt  className='update icon'/>

     </div>
    </div>
    )}

const mapDispatchToProps = dispatch => ({
    removeTask: task => dispatch(removeTask(task)) 
  })
  
export default connect(null, mapDispatchToProps)(TaskPainel)