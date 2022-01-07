import React, { useState } from "react";
import Header from "components/Layout/Header";
import Meals from "components/Meals/Meals";
import Cart from "components/Cart/Cart";
import CartProvider from "store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
