import { createSlice } from '@reduxjs/toolkit';

export const currentViewSlice = createSlice({
  name: 'currentView',
  initialState: {
    registers: [],
    primaryShowKey: '',
    secondaryShowKey: '',
    title: '',
    isSavingRegister: false,
  },
  reducers: {
    setRegisters: (state, { payload }) => {
      state.registers = payload;
    },
    setCurrentView: (state, { payload }) => {
      state.primaryShowKey = payload.primaryShowKey;
      state.secondaryShowKey = payload.secondaryShowKey;
      state.title = payload.title;
    },
    addNewRegister: (state, { payload }) => {
      state.registers.push(payload);
      state.isSavingRegister = false;
    },
    removeRegister: (state, { payload }) => {
      state.registers = state.registers.filter((r) => payload !== r.id);
    },
    startSavingRegister: (state) => {
      state.isSavingRegister = true;
    },
  },
});

export const {
  setRegisters, setCurrentView, addNewRegister, removeRegister, startSavingRegister,
} = currentViewSlice.actions;
