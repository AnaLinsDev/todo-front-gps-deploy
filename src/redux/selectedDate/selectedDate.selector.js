import {createSelector} from 'reselect'

const selectDate = state => state.date

export const selectSelectedDate = createSelector(
    [selectDate],
    (date) => date.selectDate
)