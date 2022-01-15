import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./ui-slice";
import cartSliceReducer from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});

export default store;
