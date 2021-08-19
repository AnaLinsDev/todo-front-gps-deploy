import {combineReducers } from 'redux'

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import selectedDateReducer from './date/date.reducer';
import taskReducer from './tasks/tasks.reducer';
import userReducer from './user/user.reducer';


const persistConfig = {
    key: 'root',
    storage
  };
  
  const rootReducer = combineReducers({
      date : selectedDateReducer,
      task : taskReducer,
      user : userReducer

})

export default persistReducer(persistConfig, rootReducer);