import {combineReducers } from 'redux'
import selectedDateReducer from './selectedDate/selectedDate.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
  };
  
  const rootReducer = combineReducers({
      date : selectedDateReducer
    //user: userReducer,

})

export default persistReducer(persistConfig, rootReducer);