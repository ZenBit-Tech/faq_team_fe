import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/redux/types';

const initialState: AuthState = {
  user: { name: '', email: '', role: '' },
  access_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    clearToken: state => {
      state.access_token = '';
    },
  },
});

export const { setToken, clearToken, setEmail } = authSlice.actions;
export const authReducer = authSlice.reducer;
