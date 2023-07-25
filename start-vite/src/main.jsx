import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./routes/Posts";
import RootLayout from "./routes/RootLayout";
import NewPost from "./routes/NewPost";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        //로더는 해당 컴포넌트를 렌더링 하기 전에 필요한 것들을 미리 랜더링하여 같이 보낼 수 있다.
        //그러나 로더가 먼저 실행되기에 해당 컴포넌트를 수정할 수는 없다.
        loader: postLoader,
        children: [{ path: "/create-post", element: <NewPost />, action }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
