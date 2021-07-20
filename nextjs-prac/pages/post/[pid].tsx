import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;

// /post/1, /post/abc 등의 라우트는 이 파일에 의해 매치될 것임
// post뒤에 쿼리들에 따라..
// 예를 들어, '/post/abc' 라우트의 경우 { "pid": "abc" } 의 쿼리 객체를 가짐
// ex2. '/post/abc?foo=bar' 라우트의 경우 { "foo": "bar", "pid": "abc" } 의 쿼리 객체를 가짐

// but, 쿼리 파라미터를 동일한 이름으로 오버라이딩함
// 예를 들어, '/post/abc?pid=123' 라우트의 경우 { "pid": "abc" }의 쿼리 객체를 가짐. 즉.. 이후 pid 파라미터 값은 무시됨
