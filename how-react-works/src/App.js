import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  // 어떤 함수가 절대 변경돼서는 안되는 경우라면 이 때 useCallback을 이용해서 그 함수를 저장함
  // useCallback은 useEffect처럼 두번째 인자로 의존성 배열을 가지고, 하는 역할도 동일하다.
  // setState는 항상 같은 함수 객체일 것이라고 React에서 보장했으므로 의존성 배열에 넣어줄 필요가 없음

  // 의존성 배열에 값 추가: 일반적으로 그 함수를 저장하기를 원한다는 것임. 새 값이 있을 때마다 해당 함수를 다시 만들고
  // 새로 만든 함수를 저장. => 항상 최신 변수값을 사용할 수 있게 됨.
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
