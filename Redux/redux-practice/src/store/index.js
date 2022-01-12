import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./couter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
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

// createSlice로 액션을 전달할 수 있다.
// counterSlice.actions.toggleCounter의 리턴값은 {type: '임의의 자동 생성된 고유한 식별자'}인데, 이걸 신경 쓸 필요는 없다.
// 단지 createSlice의 actions key와 객체를 사용하기만 하면 됨
// export를 해줌으로써 actions와 store 모두를 export하게 됨

export default store;
