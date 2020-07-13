import React from "react";
import Button from "@material-ui/core/Button";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const currPath = window.location.pathname;
    this.postId = +currPath.slice(13);
  }

  componentDidMount() {
    fetch("http://localhost:3000/forum/posts/" + this.postId)
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
    if (this.state.posterId === this.props.id) {
      fetch("http://localhost:3000/forum/posts/" + this.postId, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: this.postId }),
      });
    }
  };
  render() {
    const { title, text, posterName } = this.state;
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
