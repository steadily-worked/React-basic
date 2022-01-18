import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCartShown: false, notification: null };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isCartShown = !state.isCartShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
