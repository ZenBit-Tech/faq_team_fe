import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/redux/types';

const initialState: AuthState = {
  user: { name: '', email: '', role: '' },
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
