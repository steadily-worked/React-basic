import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
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
