import React, { useState } from "react";
import "./taskUpdate.styles.scss";


//redux
import { connect } from 'react-redux';
import { setTaskById, getTaskToUpdate } from '../../redux/tasks/tasks.actions';
import { selectUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import { selectTaskUpdating } from "../../redux/tasks/tasks.selector";

function TaskUpdate ({task, setTaskById, getTaskToUpdate, user}){
  
  const dateTask = task.date.split('/')
  const dateValue = dateTask[2] + '-' + dateTask[1] + '-' + dateTask[0]


  const [title, setTitle] = useState(task.title)
  const [date, setDate] = useState(dateValue)
  const [description, setDescription] = useState(task.description)

  const handleClick = () => {

    console.log(task)
    console.log(task)
    console.log(task)

    const dateSplit = date.split('-')
    const dateOriginal = dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0]

    const taskUpdated = {
      id : task.id,
      title : title != task.title ? title : task.title,
      date :  dateOriginal != task.date ? dateOriginal : task.date,
      description : description != task.description ? description : task.description,
      status : task.status
    }

    setTaskById(taskUpdated)
    getTaskToUpdate(null)

    fetch(`https://gps-back-spring-ifeito.herokuapp.com/usuario/${user.id}/atualizartask/${taskUpdated.id}`,
    { 
     method: "PUT" ,
     headers: {"Content-type": "application/json"},
     body: JSON.stringify({
       id : taskUpdated.id,
       title : taskUpdated.title,
       description : taskUpdated.description,
       status : taskUpdated.status,
       date : taskUpdated.date
     })
   })
    .then(resp => resp.json() )
    .catch(err => { throw  err })

  }


  return(
    
  <div className="task-update">
    <div className="create-task-title">
      <h2>Update Task</h2>
    </div>
    <form className="task-form">
      <input
        type="text"
        name="title"
        id="form-title"
        value={title}
        required
        placeholder="Title"
        onChange={event => setTitle(event.target.value)}      />

      <textarea
        name="description"
        id="description"
        placeholder="Description"
        value={description}
        required
        cols="30"
        rows="10"
        onChange={event => setDescription(event.target.value)}      />
        
      <div className="form-date">
      <input  
          required 
          type="date" 
          value={date}
          name="date" 
          id="date" 
          onChange={event => setDate(event.target.value)}       />
      </div>
      <div className='buttons-update-div'>
      <button type="button" className="btn send"
          onClick={() => {handleClick()}} 
          >Update task</button>
       <button type="button" className="btn cancel"
          onClick={() => {getTaskToUpdate(null)}} 
          >Cancel</button>
        </div>
    </form>
  </div>


  )}

  const mapStateToProps = createStructuredSelector({
    user : selectUser,
    task : selectTaskUpdating
    })

  const mapDispatchToProps = dispatch => ({
    setTaskById: task => dispatch(setTaskById(task))  ,
    getTaskToUpdate  : task => dispatch(getTaskToUpdate(task))  
    })
    
export default connect(mapStateToProps, mapDispatchToProps)(TaskUpdate)
