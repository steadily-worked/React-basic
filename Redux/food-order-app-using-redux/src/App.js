import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { uiSliceActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiSliceActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://food-order-app-with-redux-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    });
  }, [cart, dispatch]);
  // 여기에 들어간 dispatch는, 이 effect가 재실행되도록 하지 않으며 useEffect는 cart의 영향만 받을 것이다.
  // 그 이유는, react-redux가 '이 함수는 절대 변하지 않을 것'이라고 보증하기 때문.

  return (
    <Fragment>
      {notification && (
        <Notification
          state={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
