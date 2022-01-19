import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("요청 성공 시 글이 렌더링 되는지 검사해볼게요", async () => {
    window.fetch = jest.fn();
    // Jest에서 fn()을 통해 더미 함수를 만들어 줌
    window.fetch.mockResolvedValueOnce({
      // mockResolvedValueOnce(): fetch 함수가 호출되었을 때 결정되어야 하는 값을 설정할 수 있게 해준다.
      json: async () => [{ id: "1", title: "첫번째 글!" }],
      // json: JSON이 호출되었을 때 반환하고 싶은 것을 정의
      // 이 일련의 과정은, 내장 fetch 함수를 더미 fetch 함수로 덮어쓰고 있는 것임
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem", {
      exact: false,
    });
    expect(listItemElements).not.toHaveLength(0);
    // 두 개 이상의 아이템이 예상될 경우 getAllByRole
    // listitem을 찾지 못한다고 나오는데, 이는 HTTP 요청을 보내는 것(비동기)을 가정하지 않았기 때문
    // 즉 HTTP 요청이 성공적으로 이뤄지기 전에는 li에 값이 없는 상태이기 때문에 에러가 생기는 것
    // 이 경우 findAllByRole 메소드를 사용하지만 이는 비동기를 전제로 하기 때문에 async / await 선언이 되어있어야 한다.

    // 테스팅 시에 HTTP 요청을 보내진 않는다. 보낸다면 트래픽 증가로 인해 서버 과부하가 발생할 수 있기 때문이기도 하고,
    // HTTP(특히 POST)요청을 보낸다면 응답 값이 DB에 저장될 것이기 때문
    // 이 경우 보통은 진짜 요청을 전송하지 않거나, 일종의 테스팅 서버로 요청을 전송하는 방식을 사용한다.
  });
});
