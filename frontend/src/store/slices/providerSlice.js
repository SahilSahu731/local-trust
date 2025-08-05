import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providerProfile: null,
  isLoading: false,
  error: null,
};

const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    providerRequestStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.providerProfile = action.payload;
      state.error = null;
    },
    providerRequestFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.providerProfile = null;
    },
    clearProviderState: (state) => {
      state.providerProfile = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  providerRequestStart,
  createProfileSuccess,
  providerRequestFailure,
  clearProviderState,
} = providerSlice.actions;

export default providerSlice.reducer;