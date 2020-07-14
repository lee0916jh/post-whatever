import React from "react";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const currPath = window.location.pathname;
    this.postId = +currPath.slice(13);
    this.rerender = false;
  }

  componentDidMount() {
    fetch(
      "https://secret-headland-89973.herokuapp.com/forum/posts/" + this.postId
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          title: data.title,
          text: data.text,
          posterName: data.poster_name,
          posterId: +data.poster_id,
        });
      })
      .catch((err) => console.log("Error fetching the post"));
  }

  onClickDelete = () => {
    if (this.props.id === 0) {
      alert("Sorry! Anonymous user cannot delete any posts.");
    } else if (this.state.posterId === this.props.id) {
      fetch(
        "https://secret-headland-89973.herokuapp.com/forum/posts/" +
          this.postId,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: this.postId }),
        }
      )
        .then((res) => res.json)
        .then((data) => {
          this.rerender = true;
          this.props.updateParentPosts();
        });
    } else {
      alert("Sorry! You can only delete posts you created.");
    }
  };
  render() {
    const { title, text, posterName } = this.state;
    if (this.rerender) {
      return <Redirect to="/forum" />;
    }
    return (
      <div className="flex flex-column">
        <article className="pa3 pa5-ns">
          <h1 className="">{title}</h1>
          <h3 className="tr">by {posterName}</h3>
          <p className="measure lh-copy">{text}</p>
        </article>
        <div className="pa3 pa5-ns">
          <Button
            className="fr"
            variant="contained"
            onClick={this.onClickDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}
export default PostPage;
