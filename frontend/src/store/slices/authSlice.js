// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequestStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user || action.payload.newUser;
      state.token = action.payload.token;
      state.error = null;
    },
    authRequestFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  authRequestStart,
  authRequestSuccess,
  authRequestFailure,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;