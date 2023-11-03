import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  registerModal: boolean;
  loginModal: boolean;
};

const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
};

export const modalSlice = createSlice({
  name: "modal",

  initialState,
  reducers: {
    registerModalFunc: (state) => {
      state.registerModal = !state.registerModal;
    },
    loginModalFunch: (state) => {
      state.loginModal = !state.loginModal;
    },
  },
});

export const { registerModalFunc, loginModalFunch } = modalSlice.actions;

export default modalSlice.reducer;
