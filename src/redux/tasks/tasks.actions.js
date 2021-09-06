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

export const setStatusDowngrade = (task) => ({
    type: TaskActionTypes.SET_STATUS_DOWNGRADE,
    payload: task
})

export const setStatusUpgrade = (task) => ({
    type: TaskActionTypes.SET_STATUS_UPGRADE,
    payload: task
})

export const setTaskById = (task) => ({
    type: TaskActionTypes.UPDATE_TASK,
    payload: task
})

export const getTaskToUpdate = (task) => ({
    type: TaskActionTypes.GET_TASK_TO_UPDATE,
    payload: task
})





