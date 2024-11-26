import logger from 'redux-logger';
import appReducers from './reducers/mainReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: appReducers,
});

export default store;
