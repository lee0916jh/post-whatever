import React from "react";

import Post from "./Post";

const Board = ({ posts }) => {
  if (posts) {
    return (
      <>
        {posts.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </>
    );
  } else return <></>;
};

export default Board;
