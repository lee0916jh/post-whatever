import React from "react";

import Post from "./Post";

const Board = ({ posts }) => {
  console.log(posts[0]);
  return posts.map((post, i) => {
    return <Post key={i} post={post} />;
  });
};

export default Board;
