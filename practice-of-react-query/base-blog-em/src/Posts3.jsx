import { useState, useEffect } from "react";
import { PostDetail } from "./PostDetail3";
import { useQuery, useQueryClient } from "react-query";
const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      // 현재 페이지 +1을 다음 페이지 라는 변수로 지정
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);
  // 현재 페이지와 queryClient가 바뀔 때마다, 현재 페이지 +1을 변수에 저장한 다음 그 페이지를 fetch해오는 방식으로
  // 즉, 다음에 보여질 데이터를 미리 저장하는 방식으로 저장해두는 것이다.

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
      // 앞으로 갔다가 다시 뒤돌아갈 때도 바로 렌더링될 수 있도록 이전의 데이터를 keep해두는 프로퍼티
    }
  );
  // 첫번째 인자: name, 두번째 인자: 쿼리에 대한 데이터를 얻어올 매개체
  // 그러나 그냥 이런 상태라면, 비동기 데이터 통신을 통해 데이터가 정의되기 전까지는 비어있는 상태이기 때문에
  // 받아오기 전까지는 data 또한 정의되어 있지 않은 것과 마찬가지라서 쿼리 또한 정의되지 않은 것이다.
  if (isLoading) return <h3>Loading...</h3>;
  // 이처럼 데이터가 없을 때를 분기처리를 해주면, 처음에 No Data!가 뜨면서 로딩이 되다가
  // 비동기 데이터 통신이 완료가 되면 map함수가 제대로 동작하여 데이터 모음이 나오게 된다.
  // if (isFetching) return <h3>Fetching in progress...</h3>;
  // isFetching을 조건으로 건 경우, fetch해 온 데이터가 이미 있다는 것을 알고 있음에도 불구하고
  // 매번 가져오기를 진행하고 있음

  // isFetching과 isLoading의 차이?
  // 전자: 비동기 쿼리가 해결되지 않아서 가져오기가 완료되지 않은 상황을 이름.
  // 후자: isFetching의 하위 집합. 즉 isFetching의 상황에 + cached된 데이터조차 없는 상황(즉 쿼리를 만들기조차 하지 않은 상황)
  if (isError)
    return (
      <h3>
        Oops, something weng wrong <p>{error.toString()}</p>😂
      </h3>
    );
  // 3번의 재시도를 하고, 그래도 실패하 경우 isError이 true가 됨.
  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage === maxPostPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          // 비동기식 상태 업데이트이기 때문에 실제로 적용되었는지 여부를 알 수 없음
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
