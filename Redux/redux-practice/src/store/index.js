import { createSlice, configureStore } from "@reduxjs/toolkit";

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
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });
// 그러나 이러한 createSlice와 같은 방식은 기존 리듀서 방식에 비해 코드가 간결해지긴 하지만
// 역시나 앱의 규모가 커졌을 때 createStore에 하나의 리듀서만 전달이 되어야 하기 때문에
// 서로 다른 slice에 접근하는 리듀서가 많아지면서 문제가 생길 수 있다.
// 이 때에 createStore 대신 reduxjs-toolkit의 configureStore를 사용하면
// 스토어를 만드는 건 같지만 여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다는 장점이 있다.
// configureStore에서는 리듀서의 값이 단일 리듀서가 될 수 있다.
// 위에서처럼 counterSlice.reducer를 사용해서 모든 리듀서 메소드를 갖고 있는 counterSlice의
// 메소드를 가져올 수 있다.
// 앱의 규모가 커져서 상태 slice가 여러 개가 된다면, key값(reducer) 대신에 객체를 설정해서
// 그 객체 안에 원하는 대로 속성과 이름을(즉 key값을 객체로) 정하고 그 속성이 또 다른 리듀서 함수가 되게 할 수 있다.
// 이러한 방식으로 reducer map을 생성하는 것이다. 예시로는 { count: counterSlice.reducer }가 있겠다.
// configureStore가 이러한 모든 리듀서들을 하나의 큰 리듀서들로 병합을 해줄 것이다.

export const counterActions = counterSlice.actions;
// createSlice로 액션을 전달할 수 있다.
// counterSlice.actions.toggleCounter의 리턴값: {type: '임의의 자동 생성된 고유한 식별자'}. 이거 신경 쓸 필요는 없다.
// 단지 createSlice의 actions key와 객체를 사용하기만 하면 됨
// export를 해줌으로써 actions와 store 모두를 export하게 됨

export default store;
