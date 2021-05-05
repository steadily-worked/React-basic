import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/steadily">steadily 프로필</Link>
        </li>
        <li>
          <Link to="/profile/honggildong">홍길동 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/info", "/about"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
