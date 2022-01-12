import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
// export해준 counterActions(리듀서의 모음)을 import 해오고
// 실제로 적용할 때는 13, 22, 26행과 같이 한다.

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload(Redux-toolkit이 임의로 설정함): 5 }
    // 17행의 경우 increase의 인자로 숫자를 넣어주면 자동으로 payload로 인식된다.
    // 그래서 다른 action 인자가 들어가는 경우에는 reducer 내에 인자로 action.payload를 넣어줘야 한다
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  // 이 컴포넌트 자체에만 관련있는 상태의 경우 useState 사용이 더 바람직하다.
  // global 상태는 Redux 사용이 바람직
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
