import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'redux/types';

const initialState: AuthState = {
  user: { name: '', email: '', role: '', id: '' },
  access_token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token')!)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },

    setUserId: (state, action: PayloadAction<string>) => {
      state.user.id = action.payload;
    },

    setToken: (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload));
    },

    clearToken: state => {
      state.access_token = '';
    },
  },
});

export const { setToken, clearToken, setEmail, setUserId } = authSlice.actions;
export const authReducer = authSlice.reducer;
