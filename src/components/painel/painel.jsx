import React, { Component } from 'react';
import TaskPainel from '../taskPainel/taskPainel';
import './painel.scss'

//redux
import {connect} from 'react-redux';
import {selectTasks} from '../../redux/tasks/tasks.selector'
import {selectSelectedDate} from '../../redux/date/date.selector'
import {createStructuredSelector} from 'reselect'
import { getAllTasks } from '../../redux/tasks/tasks.actions';


class Painel extends Component{
constructor(props){
    super(props)
    this.state = {
        date : '',
        tasks : []
    }
    
}

componentDidMount(){

    fetch('http://localhost:8080/task/readtasks',  { method: 'GET'})
    .then (res => res.json() )
    .then (out => this.setState({tasks : out}))
    .catch(err => { throw  err })

}

render(){

    const tasks  = this.state.tasks;
    const date  = this.props.date;

    return (

    <div className='painel'>
    <h1> Date  {date}</h1>
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
}
const mapStateToProps = createStructuredSelector({
    date : selectSelectedDate, 
    tasks : selectTasks
    })

const mapDispatchToProps = dispatch => ({
    setTask: () => dispatch( setTask() )
    })
      

 export default connect(mapStateToProps, mapDispatchToProps)(Painel)

