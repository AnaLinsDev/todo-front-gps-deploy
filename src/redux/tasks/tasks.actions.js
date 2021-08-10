import {TaskActionTypes} from './tasks.types'

export const setTasks = (task) => ({
    type: TaskActionTypes.SET_TASKS,
    payload: task
})

export const addTask = (task) => ({
    type: TaskActionTypes.ADD_TASK,
    payload: task
})

export const removeTask = (task) => ({
    type: TaskActionTypes.REMOVE_TASK,
    payload: task
})

export const setStatusTaskToTodo = (task) => ({
    type: TaskActionTypes.SET_STATUS_TODO,
    payload: task
})

export const setStatusTaskToDoing = (task) => ({
    type: TaskActionTypes.SET_STATUS_DOING,
    payload: task
})

export const setStatusTaskToDone = (task) => ({
    type: TaskActionTypes.SET_STATUS_DONE,
    payload: task
})




