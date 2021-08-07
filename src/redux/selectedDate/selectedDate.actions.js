import {DateActionTypes} from './selectedDate.types'

export const setSelectedDate = date => ({
    type: DateActionTypes.SET_SELECTED_DATE,
    payload: date
})