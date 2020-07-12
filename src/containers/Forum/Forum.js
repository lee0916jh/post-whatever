import React from "react";

import ForumHeader from "../../components/ForumHeader";
import Board from "../../components/Board";

import Container from "@material-ui/core/Container";
class Forum extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: "title 1",
          text: "text text",
        },
        {
          title: "title 1",
          text: "text text",
        },
        {
          title: "title 1",
          text: "text text",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("http://locashost:3000/forum").then();
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="f1 tc">Forum</h2>
        <Container className="flex flex-column">
          <ForumHeader />
          <Board posts={this.state.posts} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Forum;
