import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열이다.
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 실습</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요.</p>}
    </div>
  );
};

export default About;
