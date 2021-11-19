import React, { useState, useEffect } from "react";
import useFetchUser from "../Hooks/useFetchUser";

const Profile = ({ userId }) => {
  const { loading, user, error } = useFetchUser(userId);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <ul>
      <li>id: {user.id}</li>
      <li>email: {user.email}</li>
      <li>name: {user.name}</li>
      <li>phone: {user.iphoned}</li>
      <li>website: {user.website}</li>
    </ul>
  );
};

export default Profile;
