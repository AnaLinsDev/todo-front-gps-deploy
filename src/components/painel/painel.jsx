import React, { Component } from 'react';
import TaskPainel from '../taskPainel/taskPainel';
import './painel.scss'

//redux
import {connect} from 'react-redux';
import {selectSelectedDate} from '../../redux/date/date.selector'
import {selectTaskList} from '../../redux/tasks/tasks.selector'
import {setTasks} from '../../redux/tasks/tasks.actions'

import {createStructuredSelector} from 'reselect'

class Painel extends Component{
constructor(props){
    super(props)
    this.state = {
        task : [],
    
    }
}

UNSAFE_componentWillReceiveProps(newProps){
    this.setState( { task : newProps.task} )
}


componentDidMount(){
    console.log("ENTROU componentDidMount PAINEL")

    fetch('http://localhost:8080/task/readtasks', { method: 'GET' })
    .then (res => res.json() )
    .then (out => {
        this.setState({task : out})
    })
    .catch(err => { throw  err })
   
}



render(){

    console.log("ENTROU RENDER PAINEL")
    const date  = this.props.date;
    const task  = this.state.task;

    this.props.setTasks(task)

    return (

    <div className='painel'>
    <h1> Date  {date}</h1>
    <div className='painel-main'>

        <div className='painel-colunm'>
            <p className='type'>TODO</p>
            <div className='painel-colunm-tasks'>
                {task.map(task => (task.status == "TODO" && task.date == date ? <TaskPainel key={task.id} task = {task}/> : ''))}
            </div>
        </div>

        <div className='painel-colunm'>
            <p className='type'>DOING</p>
            <div className='painel-colunm-tasks'>
                {task.map(task => (task.status == "DOING" && task.date == date ? <TaskPainel key={task.id} task = {task}/> : ''))}
            </div>
        </div>

        <div className='painel-colunm'>
            <p className='type'>DONE</p>
            <div className='painel-colunm-tasks'>
                {task.map(task => (task.status == "DONE" && task.date == date ? <TaskPainel key={task.id} task = {task}/> : ''))}
            </div>
        </div>

    </div>
    </div>
    )
}
}

const mapStateToProps = createStructuredSelector({
    date : selectSelectedDate, 
    task : selectTaskList
    })

const mapDispatchToProps = dispatch => ({
    setTasks: task => dispatch(setTasks(task)) 
  })

 export default connect(mapStateToProps, mapDispatchToProps)(Painel)

