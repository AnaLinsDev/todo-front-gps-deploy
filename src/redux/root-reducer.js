import {combineReducers } from 'redux'
import selectedDateReducer from './date/date.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from './tasks/tasks.reducer';

const persistConfig = {
    key: 'root',
    storage
  };
  
  const rootReducer = combineReducers({
      date : selectedDateReducer,
      task : taskReducer
    //user: userReducer,

})

export default persistReducer(persistConfig, rootReducer);