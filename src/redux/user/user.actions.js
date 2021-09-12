import {UserActionTypes} from './user.type'

export const addUser = (user) => (
    {
        type: UserActionTypes.ADD_USER,
        payload: user
    }
)

export const deleteUser = (user) => (
    {
        type: UserActionTypes.DELETE_USER,
        payload: user
    }
)

export const updateUser = (user) => (
    {
        type: UserActionTypes.UPDATE_USER,
        payload: user
    }
)






