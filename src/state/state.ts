import logger from 'redux-logger';
import oompaLoompaReducer from './list';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    oompaLoompas: oompaLoompaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
