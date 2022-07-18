import { configureStore } from '@reduxjs/toolkit';
import getAndFilterReducer from './redux-toolkit/getAndFilter';

export const store = configureStore({
  reducer: {
    jobs: getAndFilterReducer
  },
})