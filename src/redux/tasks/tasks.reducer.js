import {TaskActionTypes} from './tasks.types'


const INITIAL_STATE ={
    task: {}
}

const taskReducer = (state =  INITIAL_STATE, action) => {

    switch (action.type){
        case TaskActionTypes.GET_ALL_TASKS:
            return {
                ...state,
                task: action.payload
            }
            default:
                return state
    }
}

export default taskReducer