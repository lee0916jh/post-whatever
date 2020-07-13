import React from "react";

const Post = ({ post }) => {
  return (
    <div className="flex">
      <div className="outline w-10 pa2 tc">
        <code>{post.id}</code>
      </div>
      <div className="outline w-80 pa2">
        <code>{post.title}</code>
      </div>
      <div className="outline w-20 pa2 tc">
        <code>{post.poster_name}</code>
      </div>
    </div>
  );
};
export default Post;
