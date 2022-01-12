import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { authActions } from "../store/index";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <Fragment>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={onLogoutHandler}>Logout</button>
              </li>
            </Fragment>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
