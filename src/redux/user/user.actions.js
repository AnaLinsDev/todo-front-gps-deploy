import {UserActionTypes} from './user.type'

export const addUser = (user) => (
    {
        type: UserActionTypes.ADD_USER,
        payload: user
    }
)







