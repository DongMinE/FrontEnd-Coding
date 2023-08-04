const express = require("express");
const bodyParser = require("body-parser");

const { getStoredPosts, storePosts, getStoredPosts2 } = require("./data/posts");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
  res.json({ data: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post("/picker", async (req, res) => {
  const data = await getStoredPosts();
  const postData = req.body;

  // 여기서 원하는 응답 데이터 형태로 조정하여 보내기
  res.status(201).json({ message: "응답 보냈어", data });
  console.log("바디 받았어", postData);
});

app.post("/peek", async (req, res) => {
  const data = await getStoredPosts2();
  const postData = req.body;

  // 여기서 원하는 응답 데이터 형태로 조정하여 보내기
  res.status(201).json({ message: "응답 보냈어", data });
  console.log("바디 받았어", postData);
});
app.listen(8081);
