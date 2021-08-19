import {UserActionTypes} from './user.type'
import { addUser, removeUser, updateUser} from './user.utils'

const INITIAL_STATE ={
    userList: []
}

const userReducer = (state =  INITIAL_STATE, action) => {

    switch (action.type){
        case UserActionTypes:
            return {
                ...state,
                userList: action.payload
            }
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                userList: addUser(state.userList, action.payload)
            }
        case UserActionTypes.REMOVE_USER:
            return {
                ...state,
                userList: removeUser(state.userList, action.payload)
            }
        case UserActionTypes.UPDATE_USER:
            return {
                ...state,
                userList: updateUser(state.userList, action.payload)
            }

            default:
                return state
    }
}

export default userReducer