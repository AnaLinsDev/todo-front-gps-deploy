import {UserActionTypes} from './user.type'

const INITIAL_STATE ={
    user: {
        name: '',
        email: ''
    }
}

const userReducer = (state =  INITIAL_STATE, action) => {
    
    switch (action.type){
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                user: action.payload
            }

            default:
                return state
    }
}

export default userReducer