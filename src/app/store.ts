import {configureStore} from '@reduxjs/toolkit';
import charactersReducer from '../features/characters/charactersSlice';
import {apiSlice} from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
