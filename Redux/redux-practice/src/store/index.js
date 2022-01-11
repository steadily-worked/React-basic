import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export const INCREMENT = "increment";
const initialState = { counter: 0, showCounter: true };

// 전역 상태의 slice: 상태를 여러 조각으로 나눔 ex) 인증 상태와 카운터 상태
// 리듀서: 객체 혹은 맵. 이 상태 slice는 리듀서를 필요로 함
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 여기서는 액션이 필요 없음: 어떤 액션을 했느냐에 따라 메소드가 자동으로 호출되므로
    // 서로 다른 리듀서를 구별해놓고, 각각의 리듀서에 해당하는 액션을 발생시킬 것임
    increment(state) {
      state.counter++;
      // 상태를 직접적으로 변경하는 것처럼 보이지만, 실제로는 그렇지 않다.
      // redux-toolkit 내부의 immer 패키지가 이러한 직접적 상태 변경으로 보이는 코드를 확인하면
      // 자동으로 기존 상태를 복제한 후 새로운 상태 객체를 생성하며 모든 상태를 변경할 수 없게 유지한다.
      // 그리고 이렇게 변경한 상태는 변하지 않도록 오버라이딩 한다.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
    // Redux로 작업할 때 절대 기존의 state를 변경해서는 안된다.
    // 대신 새로운 state 객체를 반환해서 항상 재정의해야 한다.
    // ex) state.counter++: 객체와 배열이 자바스크립트에서 참조 값이므로 여전히 기존의 state를 변형시킨다.
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(/*counterReducer*/);

export default store;
