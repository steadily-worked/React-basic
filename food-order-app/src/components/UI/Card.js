import React, { Fragment } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <Fragment>
      <section className={classes.card}>{props.children}</section>
    </Fragment>
  );
};

export default Card;
