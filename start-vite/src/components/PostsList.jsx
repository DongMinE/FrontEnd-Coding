import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css";
// import { useState, useEffect } from "react";

function PostsList() {
  // fetch('http://localhost:8080/posts').then(reponse => Response.json()).then(data => {
  //   setPosts(data.posts);

  // })
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);
  //useEffect는 useState같이 상태가 달라질 때마다 리로딩을 하는 리액트에서 무한 루프를 방지하기 위해 쓴다
  //첫번째 값으로 내가 사용할 함수나 객체를 넣는다
  //두번째 값으로 이 useEffect를 언제 사용할지 의존성을 적는다
  //빈 값이면 한번만 실행되며 컴포넌트가 처음 랜더링 될 때 힌번만 실행된다.
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>글이 없습니다</h2>
          <p>글이 작성해봐</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>로딩중</p>
        </div>
      )} */}
    </>
  );
}

export default PostsList;
