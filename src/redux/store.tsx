import {configureStore} from '@reduxjs/toolkit';
import hiveSlice from './features/hiveSlice';
export const store = configureStore({
  reducer: {
    hiveSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
