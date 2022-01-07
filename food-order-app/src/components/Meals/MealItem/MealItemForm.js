import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "components/UI/Input";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // 현재 input에 들어가 있는 값. forwardRef를 통해 가져올 수 있게 되었음
    const enteredAmountNumber = +enteredAmount;
    // +변수 -> 문자형 숫자를 숫자형 숫자로 바꿔줌

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
      {!isAmountValid && <p>1~5 사이의 갯수를 입력해주세요.</p>}
    </form>
  );
};

export default MealItemForm;
