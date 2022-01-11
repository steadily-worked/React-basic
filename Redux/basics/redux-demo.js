const redux = require("redux");

const counterReducer = (
  state = { counter: 0 /* state의 초기 값을 지정해줘야 한다. */ },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
  // 기존 state는 redux에 저장되어 있는 것
};
// 리듀서는, 액션이 도착할 때마다 새로운 상태를 내보내야 한다.
// 입력: 이전 상태 + 디스패치된 액션
// 출력: 새로운 상태 객체
// 리덕스가 제공한 입력을 받아서 새 상태 객체라는 예상되는 출력을 내놓는다.

const store = redux.createStore(counterReducer);
// 리덕스 라이브러리에 노출된 방법. 스토어를 만드는 방법
// 파라미터로 리듀서가 들어감: 어떤 리듀서가 스토어를 바꾸는지 스토어가 알아야 하므로

const counterSubscriber = () => {
  const latestState = store.getState();
  // 최신 상태를 store.getState()를 통해 가져옴
  // 함수가 트리거 된 이후 바뀐 최신 상태 또한 확인할 수 있음
  // 즉 상태가 바뀔 때마다 함수가 실행된다는 것을 알려주는 것임
  console.log(latestState);
};

store.subscribe(counterSubscriber);
// 스토어가 counterSubscriber를 구독하면, 데이터와 스토어가 바뀔 때마다 실행

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
// 객체의 상태와 subscribe 대신에 dispatch를 호출하고, dispach는 action을 dispatch한다.
// 주로 파라미터는 string을 사용한다.

// node redux-demo.js를 실행하면, 디폴트 값이 0이고 처음으로 리듀서가 실행되어 1이 되는데,
// 이후 새로운 action을 dispatch하고, 이때문에 reducer 함수가 실행되어 counter가 1 더 증가하여 2가 된다.

// 처음에 리듀서가 실행되어 시작부터 1이 증가하는 것을 막기 위해서는 if (action.type === 'increment') 이런 식으로 조건을 설정해줘야 한다.
