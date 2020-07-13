import React from "react";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <div className="flex">
      <div className="outline w-10 pa2 tc">
        <code>{post.id}</code>
      </div>
      <div className="outline w-80 pa2">
        <Link to={"/forum/posts/" + post.id} className="link">
          {post.title}
        </Link>
      </div>
      <div className="outline w-20 pa2 tc">
        <code>{post.poster_name}</code>
      </div>
    </div>
  );
};
export default Post;
