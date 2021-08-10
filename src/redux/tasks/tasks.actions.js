import {TaskActionTypes} from './tasks.types'

export const setTask = (task) => ({
    type: TaskActionTypes.SET_TASK,
    payload: task
})



