import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'not-logged', // not-logged, logged, checking
    showName: null,
    email: null,
    password: null,
    uid: null,
    photoUrl: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'logged';
      state.showName = payload.showName;
      state.photoUrl = payload.photoUrl;
    },
  },
});

export const { login } = userSlice.actions;
