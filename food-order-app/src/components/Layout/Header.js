import React, { Fragment } from "react";
import Meals from "assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Meals} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
