import React from "react";
import useFetch from "../Hooks/useFetch";

const Posts = ({ userId }) => {
  const { loading, data: posts, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default Posts;
