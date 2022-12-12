import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  show: false,
  type: 'info',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotif: (state, { payload }) => {
      state.message = payload.message;
      state.type = payload.type;
      state.show = true;
    },
    restartNotif: () => initialState,
    successNotif: (state, { payload }) => {
      state.message = payload;
      state.type = 'success';
      state.show = true;
    },
    errorNotif: (state, { payload }) => {
      state.message = payload;
      state.type = 'error';
      state.show = true;
    },
  },
});

export const {
  setNotif, restartNotif, successNotif, errorNotif,
} = notificationSlice.actions;
