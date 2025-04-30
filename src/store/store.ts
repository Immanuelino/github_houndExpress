import { configureStore } from '@reduxjs/toolkit';
import guideReducer from './guidesSlice';

export const store = configureStore({
  reducer: {
    guides: guideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
