const fs = require("node:fs/promises");

async function getStoredPosts() {
  const rawFileContent = await fs.readFile("posts.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  return data;
}

async function getStoredPosts2() {
  const rawFileContent = await fs.readFile("posts2.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  return data;
}

function storePosts(posts) {
  return fs.writeFile("posts.json", JSON.stringify(posts));
}

exports.getStoredPosts2 = getStoredPosts2;
exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
