import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// 1 suite with 1 test.
describe("Greeting Component", () => {
  test("Hello World라는 텍스트가 있는지 검사해볼게요", () => {
    // 1. Arrange
    render(<Greeting />);

    // 2. Act
    // ... nothing

    // 3. Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false /* 완벽하게 똑같은지 여부 검사, 디폴트 값이 true임 */,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("버튼을 클릭하지 않았을 때 '만나서 반가워요!'가 렌더링 되는지 검사해볼게요", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("만나서 반가워요", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("버튼을 클릭했을 때 '이렇게 바뀌었어요!'가 렌더링 되는지 검사해볼게요", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.getByText("이렇게 바뀌었어요", {
      exact: false,
    });
    expect(changedTextElement).toBeInTheDocument();
  });
});
