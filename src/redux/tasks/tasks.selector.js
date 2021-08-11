import {createSelector} from 'reselect'

const selectTask = state => state.task

export const selectTaskList = createSelector(
    [selectTask],
    (task) => task.taskList
)