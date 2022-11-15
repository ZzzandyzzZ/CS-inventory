import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'checking', // not-logged, logged, checking
    displayName: null,
    email: null,
    password: null,
    uid: null,
    photoURL: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'logged';
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
    },
    logout: (state, { payload }) => {
      state.status = 'not-logged'; // not-logged, logged, checking
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, checkingCredentials, logout } = userSlice.actions;
