import React, { Fragment } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <div className={classes.input}>
        <label htmlFor={props.name}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    </>
  );
});

export default Input;
