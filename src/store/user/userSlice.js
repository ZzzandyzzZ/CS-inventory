import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'not-logged', // not-logged, logged, checking
    showName: null,
    email: null,
    password: null,
  },
  reducers: {
    login: (state) => {
      state.status = 'logged';
    },
  },
});

export const { login } = userSlice.actions;
