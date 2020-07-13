import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ForumHeader = () => {
  return (
    <div className="flex flex-reverse br3 shadow-2 mb4">
      <Link to="/forum/post">
        <Button className="ml-auto" variant="contained">
          Create Post
        </Button>
      </Link>
    </div>
  );
};

export default ForumHeader;
