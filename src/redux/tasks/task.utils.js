export const addTaskToList = (listOfTasks, taskToAdd) => {
    return [...listOfTasks, {...taskToAdd}]
}

export const removeTaskToList = (listOfTasks, taskToRemove) => {
    return listOfTasks.filter(t => t.id != taskToRemove.id)
};

export const setStatusToTodo = (listOfTasks, task) => {
    return listOfTasks.map(t => 
        t.id == task.id 
        ? t.status = 'TODO'
        : t = task)
};

export const setStatusToDoing = (listOfTasks, task) => {
    return listOfTasks.map(t => 
        t.id == task.id 
        ? t.status = 'DOING'
        : t = task)};

export const setStatusToDone = (listOfTasks, task) => {
    return listOfTasks.map(t => 
        t.id == task.id 
        ? t.status = 'DONE'
        : t = task)};