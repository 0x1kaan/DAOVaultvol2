import { configureStore } from '@reduxjs/toolkit';
import votingReducer from './votingSlice';

export const store = configureStore({
  reducer: {
    voting: votingReducer,
  },
});
