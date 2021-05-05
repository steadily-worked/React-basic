import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Profiles from "./components/Profiles";
import HistorySample from "./components/HistorySample";
import { Route, Link, Switch } from "react-router-dom";

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
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/info", "/about"]} component={About} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
