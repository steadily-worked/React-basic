import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], count: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(existingItem);
        // push 또한 기존 배열을 변경하므로 안되지만, redux-toolkit에서는 가능
      }
    },
    removeItemFromCart() {},
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
