export const addTaskToList = (listOfTasks, taskToAdd) => {
    return [...listOfTasks, {...taskToAdd}]
}

export const removeTaskToList = (listOfTasks, taskToRemove) => {  
    return listOfTasks.filter(t => t.id != taskToRemove.id)
};

export const setStatusDowngrade = (listOfTasks, task) => {
    return listOfTasks.map(t => 

        (t.id == task.id && t.status == 'DOING') ?
        {
            ...t, 
            status : 'TODO'
        }

        : (t.id == task.id && t.status == 'DONE') ?
        {
            ...t, 
            status : 'DOING'
        } 

        : t
    )
};

export const setStatusUpgrade = (listOfTasks, task) => {
    
    return listOfTasks.map(t => 

        (t.id == task.id && t.status == 'DOING') ?
        {
            ...t, 
            status : 'DONE'
        }

        : (t.id == task.id && t.status == 'TODO') ?
        {
            ...t, 
            status : 'DOING'
        } 

        : t

    )
}