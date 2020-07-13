import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ForumHeader = () => {
  return (
    <>
      <div className=" flex flex-column">
        <Link to="/forum/post" className="ml-auto mb3">
          <Button className="ml-auto" variant="contained">
            Create Post
          </Button>
        </Link>
        <div className="flex">
          <div className="outline w-10 pa2 tc">
            <code>post no.</code>
          </div>
          <div className="outline w-80 pa2 tc">
            <code>title</code>
          </div>
          <div className="outline w-20 pa2 tc">
            <code>user</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumHeader;
