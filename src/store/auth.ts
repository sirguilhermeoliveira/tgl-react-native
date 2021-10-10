import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
  user_id: string;
}

let initialAuth: AuthState = {
  user_id: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    loginEmail(state: AuthState, action: PayloadAction<string>) {
      state.user_id = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
