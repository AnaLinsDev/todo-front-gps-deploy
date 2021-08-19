export const addUser = (listOfUsers, UserToAdd) => {
    return [...listOfUsers, {...UserToAdd}]
}

export const removeUser = (listOfUsers, UserToRemove) => {  
    return listOfUsers.filter(t => t.id != UserToRemove.id)
};

export const updateUser = (listOfUsers, User) => {
    
    return listOfUsers.map(t => 

        (t.id == User.id && t.displayName != User.displayName) ?
        {
            ...t, 
            displayName : User.displayName
        }

        : (t.id == User.id && t.email != User.email) ?
        {
            ...t, 
            email : User.email
        }

        : (t.id == User.id && t.password != User.password) ?
        {
            ...t, 
            password : User.password
        }

        : t

    )
}