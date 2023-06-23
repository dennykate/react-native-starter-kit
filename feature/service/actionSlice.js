import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  id: null,
};

export const actionSlice = createSlice({
  name: "actionSlice",
  initialState,
  reducers: {
    openAction: (state, { payload }) => {
      console.log(payload);
      state.open = true;
      state.id = payload.id;
    },
    closeAction: (state, { payload }) => {
      state.open = false;
      state.id = null;
    },
  },
});

export const { openAction, closeAction } = actionSlice.actions;
export default actionSlice.reducer;
