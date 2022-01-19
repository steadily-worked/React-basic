import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState();

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>만나서 반가워요!</p>}
      {changedText && <p>이렇게 바뀌었어요!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
