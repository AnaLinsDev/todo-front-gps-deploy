import {createSelector} from 'reselect'

const theUser = state => state.user

export const selectUser = createSelector(
    [theUser],
    (userr) => userr.user
)