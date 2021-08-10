import {createSelector} from 'reselect'

const Task = state => state.task

export const selectTask = createSelector(
    [Task],
    (task) => task.Task
)