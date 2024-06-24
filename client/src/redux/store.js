import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jobReducer from './reducers/jobReducers';
import userReducer from './reducers/userReducers';
import adminReducer from './reducers/adminReducers';
export default configureStore({
  reducer: {jobReducer, userReducer, adminReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})