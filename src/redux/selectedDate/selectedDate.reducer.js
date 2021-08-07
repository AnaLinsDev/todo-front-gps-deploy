  
import {DateActionTypes} from './selectedDate.types'


const INITIAL_STATE ={
    selectDate: null
}

const selectedDateReducer = (state =  INITIAL_STATE, action) => {

    switch (action.type){
        case DateActionTypes.SET_SELECTED_DATE:
            return {
                ...state,
                selectDate: action.payload
            }
            default:
                return state
    }
}

export default selectedDateReducer