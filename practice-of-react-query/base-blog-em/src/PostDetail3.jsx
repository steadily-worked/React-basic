import { useQuery } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  // replace with useQuery
  const { data, isLoading, isError, error } = useQuery(
    ["comments", post.id],
    // 쿼리 키를 의존성 배열로 다뤄야 함. key가 바뀔 때 React Query가 새로운 쿼리를 만들게끔.
    // useEffect의 의존성 배열을 생각하면 된다. 이렇게 []를 씌워주면 post.id가 바뀔 때마다 그에 맞는 새로운 쿼리가 생긴다.
    () => fetchComments(post.id)
    // 쿼리 함수가 파라미터에 의존하는 경우라면, 쿼리 키를 배열의 형태로 이름과 함께 파라미터를 집어넣어야
    // 파라미터를 사용한 fetch함수가 원활하게 작동된다.
  );

  if (isLoading) return <div>Comment Loading...</div>;
  if (isError)
    return <div>Oops, something went wrong 😭 {error.toString()}</div>;
  if (!data) return <div>No Comments!</div>;

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
