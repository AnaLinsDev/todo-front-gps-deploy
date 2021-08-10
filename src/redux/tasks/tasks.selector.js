import {createSelector} from 'reselect'

const Tasks = state => state.tasks

export const selectTasks = createSelector(
    [Tasks],
    (tasks) => tasks.Tasks
)