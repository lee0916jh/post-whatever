import React from "react";

const Post = ({ post }) => {
  return (
    <div className="flex">
      <p>{post.title}</p>
      <p>{post.text}</p>
    </div>
  );
};
export default Post;
