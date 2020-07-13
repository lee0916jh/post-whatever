import React from "react";

import ForumHeader from "../../components/ForumHeader";
import Board from "../../components/Board";

import Container from "@material-ui/core/Container";

class Forum extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:3000/forum")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <>
        <h2 className="f1 tc">Forum</h2>
        <Container className="flex flex-column">
          <ForumHeader />
          <Board posts={this.state.posts} />
        </Container>
      </>
    );
  }
}

export default Forum;
