import {UserActionTypes} from './user.type'

const INITIAL_STATE ={
    user: {
        id: "",
        name: "",
        email: "",
        password:""
    }
    /* Para testes:

        user: {
        id: "",
        name: "",
        email: "",
        password:""
    }

        user: {
        id: 1,
        name: "ana",
        email: "ana.o.lins@gmail.com",
        password:"123"
    }
     */
}

const userReducer = (state =  INITIAL_STATE, action) => {
    
    switch (action.type){
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        case UserActionTypes.DELETE_USER:
            return {
                ...state,
                user: INITIAL_STATE.user
            }

        case UserActionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }

            default:
                return state
    }
}

export default userReducer