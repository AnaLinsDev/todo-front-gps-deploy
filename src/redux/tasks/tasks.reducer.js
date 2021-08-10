import {TaskActionTypes} from './tasks.types'
import {addTaskToList, removeTaskToList, setStatusToDoing, setStatusToDone, setStatusToTodo} from './task.utils'

const INITIAL_STATE ={
    task: []
}

const taskReducer = (state =  INITIAL_STATE, action) => {

    switch (action.type){
        case TaskActionTypes.SET_TASKS:
            return {
                ...state,
                task: action.payload
            }
        case TaskActionTypes.ADD_TASK:
            return {
                ...state,
                task: addTaskToList(state.task, action.payload)
            }
        case TaskActionTypes.REMOVE_TASK:
            return {
                ...state,
                task: removeTaskToList(state.task, action.payload)
            }
        case TaskActionTypes.SET_STATUS_TODO:
            return {
                ...state,
                task: setStatusToTodo(state.task, action.payload)
            }
        case TaskActionTypes.SET_STATUS_DONE:
            return {
                ...state,
                task: setStatusToDone(state.task, action.payload)
            }
        case TaskActionTypes.SET_STATUS_DOING:
            return {
                ...state,
                task: setStatusToDoing(state.task, action.payload)
            }

            default:
                return state
    }
}

export default taskReducer