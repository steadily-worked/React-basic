import React, { useState } from "react";
import axios from "axios";
import ProfileWithUseFetch from "./components/ProfileWithUseFetch";
import Posts from "./components/Posts";

const App = () => {
  const [userId, setUserId] = useState(1);
  const [leng, setLeng] = useState(null);

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setLeng(res.data.length));

  return (
    <div>
      <button
        disabled={userId === 1 ? true : false}
        onClick={() => setUserId(1)}
      >
        First
      </button>
      <button
        disabled={userId > 1 ? false : true}
        onClick={() => setUserId(userId - 1)}
      >
        Prev
      </button>
      <button
        disabled={userId === leng ? true : false}
        onClick={() => setUserId(userId + 1)}
      >
        Next
      </button>
      <button
        disabled={userId < leng ? false : true}
        onClick={() => setUserId(leng)}
      >
        Last
      </button>
      <h2>Profile</h2>
      <ProfileWithUseFetch userId={userId} leng={leng} />
      <hr />
      <h2>Posts</h2>
      {userId <= 10 ? <Posts userId={userId} /> : <div>Over!</div>}
    </div>
  );
};

export default App;
