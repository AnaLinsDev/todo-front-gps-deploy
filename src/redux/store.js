import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'


import rootReducer from './root-reducer'

// o  middlewarer logger será útil para debuggar, 
// já que irá printar o que está acontecendo
const middlewarers = [logger] 

export const store = createStore(rootReducer, applyMiddleware(...middlewarers))



export default {store};