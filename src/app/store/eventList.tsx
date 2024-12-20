import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalogSlice';

export const store = configureStore({
    reducer: {
      catalog: catalogReducer,  // Add catalogReducer to the store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
