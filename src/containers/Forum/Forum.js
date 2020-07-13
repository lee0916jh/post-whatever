import React from "react";
import { Route } from "react-router-dom";

import ForumHeader from "../../components/ForumHeader";
import Board from "../../components/Board";
import PostPage from "../../components/PostPage";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/forum")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <Route path="/forum" exact>
          <h2 className="f1 tc">Forum</h2>
          <div className="flex flex-column">
            <ForumHeader />
            <Board posts={posts} />
          </div>
        </Route>
        <Route path="/forum/posts">
          <PostPage id={this.props.id} />
        </Route>
      </React.Fragment>
    );
  }
}

export default Forum;
