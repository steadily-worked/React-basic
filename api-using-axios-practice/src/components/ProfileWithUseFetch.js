import React from "react";
import useFetch from "../Hooks/useFetch";

function ProfileWithUseFetch({ userId }) {
  const { loading, data: user, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <ul>
      <li>id: {user.id}</li>
      <li>email: {user.email}</li>
      <li>name: {user.name}</li>
      <li>phone: {user.phone}</li>
      <li>website: {user.website}</li>
    </ul>
  );
}

export default ProfileWithUseFetch;
