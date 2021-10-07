import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import cartInfoReducer from './cart';
import gameReducer from './games';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartInfoReducer,
    games: gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
