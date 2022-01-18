import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";

const initialState = { items: [], quantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity++;
      if (!existingItem) {
        state.items.push({
          // push 또한 기존 배열을 변경하므로 안되지만, redux-toolkit에서는 가능
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.quantiy--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  // 아무것도 하지 않고 바로 비동기 함수를 리턴해준다.
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://food-order-app-with-redux-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (eror) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    }
  };
};
// 아직 리듀서에 도달하지 않았으므로 비동기 코드 등을 여기서 실행할 수 있다.

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
