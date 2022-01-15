import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCartShown: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
