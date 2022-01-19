import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// 1 suite with 1 test.
describe("Greeting Component", () => {
  test("Hello World라는 텍스트가 있는지 검사해볼게요", () => {
    // 1. Arrange
    render(<Greeting />);

    // 2. Act
    // ... nothing

    // 3. Assert
    // screen.find(): 에러 발생 시 promise를 반환 -> 화면상에 엘리먼트가 나타나게 됨
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false /* 완벽하게 똑같은지 여부 검사, 디폴트 값이 true임 */,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
