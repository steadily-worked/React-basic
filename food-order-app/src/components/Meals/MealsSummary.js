import React, { Fragment } from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <Fragment>
      <div className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <br />
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </Fragment>
  );
};

export default MealsSummary;
