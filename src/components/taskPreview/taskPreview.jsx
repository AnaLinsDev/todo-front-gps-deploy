import React, { useState } from "react";
import "./taskPreview.scss";

//redux
import { connect } from 'react-redux';
import { addTask } from '../../redux/tasks/tasks.actions';

function TaskPreview ({addTask}){

  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [response, setResponse] = useState('')

  const handleClick = () => {

    const dateSplit = date.split('-')
    const dateOriginal = dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0]

    const task = {
      title : title,
      description : description,
      date :  dateOriginal,
      status : 'TODO'
    }

    fetch(`http://localhost:8080/task/createtask`,
       { 
        method: 'POST' ,
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          title : task.title,
          description : task.description,
          status : task.status,
          date : task.date
        })
      })
       .then( res => res.json())
       .then( obj => addTask(obj))
       .catch(err => { throw  err })
    }

  return(
  <div className="task-preview">
    <div className="create-task-title">
      <h2>Task</h2>
    </div>
    <form className="task-form">
      <input
        type="text"
        name="title"
        id="form-title"
        required
        placeholder="Title"
        onChange={event => setTitle(event.target.value)}      />

      <textarea
        name="description"
        id="description"
        placeholder="Description"
        required
        cols="30"
        rows="10"
        onChange={event => setDescription(event.target.value)}      ></textarea>
      <div className="form-date">
      <input  
          required 
          type="date" 
          name="date" 
          id="date" 
          onChange={event => setDate(event.target.value)}
      />
      </div>
      
      <button type="button" className="btn-send"
          onClick={() => {handleClick(); addTask(response)}} 
          >Add to Painel</button>
    </form>
  </div>
  )}


  const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTask(task)) ,
    })
    
export default connect(null, mapDispatchToProps)(TaskPreview)

