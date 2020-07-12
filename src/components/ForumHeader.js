import React from "react";
import Button from "@material-ui/core/Button";

const ForumHeader = () => {
  return (
    <div className="flex flex-reverse br3 shadow-2 mb4">
      <Button className="ml-auto" variant="contained">
        Create Post
      </Button>
    </div>
  );
};

export default ForumHeader;
