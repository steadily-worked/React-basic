import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);

  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
