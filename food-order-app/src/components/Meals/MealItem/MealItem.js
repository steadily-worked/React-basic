import React, { Fragment } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const addToCartHandler = () => {};

  return (
    <Fragment>
      <section className={classes.meal}>
        <section>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <span className={classes.price}>{props.price}</span>
        </section>
        <section>
          <MealItemForm onAddToCart={addToCartHandler} />
        </section>
      </section>
    </Fragment>
  );
};

export default MealItem;
