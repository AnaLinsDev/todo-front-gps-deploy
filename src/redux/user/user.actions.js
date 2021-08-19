import {UserActionTypes} from './user.type'

export const setUsers = (user) => ({
    type: UserActionTypes.SET_USERS,
    payload: user
})

export const addUser = (user) => ({
    type: UserActionTypes.ADD_USER,
    payload: user
})

export const removeUser = (user) => ({
    type: UserActionTypes.REMOVE_USER,
    payload: user
})

export const updateUser = (user) => ({
    type: UserActionTypes.UPDATE_USER,
    payload: user
})






