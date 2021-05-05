import React from "react";

const data = {
  steadily: {
    name: "박상민",
    description: "리액트를 배우는 개발자",
  },
  honggildong: {
    name: "홍길동",
    description: "홍길동",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
