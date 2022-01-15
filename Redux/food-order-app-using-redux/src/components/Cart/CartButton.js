import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
