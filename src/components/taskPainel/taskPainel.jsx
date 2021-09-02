import React from 'react';
import './taskPainel.scss'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import { RiReplyLine } from "react-icons/ri";

//redux
import { connect } from 'react-redux';
import { removeTask, setStatusDowngrade, setStatusUpgrade } from '../../redux/tasks/tasks.actions';
import {selectUser} from '../../redux/user/user.selector'
import {createStructuredSelector} from 'reselect'


function TaskPainel({task, user, removeTask, setStatusDowngrade, setStatusUpgrade}){

    const handleClick = (taskInfo, method, endpoint, level=null) => {

      if (level == 'up') {
        setStatusUpgrade(taskInfo)
        if     (taskInfo.status == 'DOING') { taskInfo.status = 'DONE' }
        else if (taskInfo.status == 'TODO') { taskInfo.status = 'DOING'}
      }
     else if (level == 'down'){
        setStatusDowngrade(taskInfo)
        if     (taskInfo.status == 'DOING'){ taskInfo.status = 'TODO' }
        else if (taskInfo.status == 'DONE'){ taskInfo.status = 'DOING'}
      }

      console.log('-----------------------------------')
      console.log('-----------------------------------')
      console.log('endpoint: ' + endpoint + '  method: ' + method)
      console.log('body: ' + taskInfo.status)
      console.log('-----------------------------------')
      console.log('-----------------------------------')

      fetch(`https://gps-back-spring-ifeito.herokuapp.com/usuario/${user.id}/${endpoint}/${taskInfo.id}`,
         { 
          method: method ,
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({
            id : taskInfo.id,
            title : taskInfo.title,
            description : taskInfo.description,
            status : taskInfo.status,
            date : taskInfo.date
          })
        })
         .catch(err => { throw  err })

      }
      


    return (
    <div className='task-painel'>
    {
    task.status == "DOING"
     ? 
    <div className = 'icons-sup'>

    <RiReplyLine className='undone icon' 
    onClick={() => {handleClick(task, 'PUT', 'atualizartask', 'down')}}/> 

    <HiCheck className='done icon'
    onClick={() => {handleClick(task, 'PUT', 'atualizartask', 'up')}} />
    
    </div>
    : task.status == "TODO" ?
    <div className = 'icons-sup-right'>
    <HiCheck className='done icon'
    onClick={() => {handleClick(task, 'PUT', 'atualizartask', 'up')}} />
    </div>
    :
    <div className = 'icons-sup'>

    <RiReplyLine className='undone icon' 
    onClick={() => {handleClick(task, 'PUT', 'atualizartask', 'down')}}/> 
    </div>
    }

     <h2>{task.title} </h2>
     <p>{task.description}</p>
     <div className = 'icons-inf'>

     <RiDeleteBin5Line className='delete icon' 
     onClick={() => {handleClick(task, 'DELETE', 'removertask'); removeTask(task)}} />

     {/* <BiEditAlt  className='update icon'/> */}

     </div>
    </div>
    )}



const mapStateToProps = createStructuredSelector({
  user : selectUser,
  })

const mapDispatchToProps = dispatch => ({
  removeTask: task => dispatch(removeTask(task)) ,
  setStatusDowngrade: task => dispatch(setStatusDowngrade(task)) ,
  setStatusUpgrade: task => dispatch(setStatusUpgrade(task)) 
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(TaskPainel)