import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "components/UI/Input";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          max: "5",
          min: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>1~5 사이의 양을 입력해주세요.</p>}
    </form>
  );
};

export default MealItemForm;
