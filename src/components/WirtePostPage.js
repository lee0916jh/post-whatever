import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

class WritePostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      title: "",
      text: "",
    };
  }
  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  writePost = () => {
    const { id, name, title, text } = this.state;
    fetch("https://secret-headland-89973.herokuapp.com/forum/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        poster_id: id,
        poster_name: name,
        title: title,
        text: text,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Posting success"))
      .catch((err) => console.log("Posting error"));
  };

  render() {
    return (
      <div>
        <div className="flex flex-column">
          <div className="pa2 black-80 w-100">
            <div className="w-100">
              <label htmlFor="title" className="f6 b db mb2">
                Title
              </label>
              <input
                id="title"
                className="input-reset ba b--black-20 pa2 mb1 db w-100"
                type="text"
                name="title"
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="pa2 black-80">
            <div className="w-100">
              <label htmlFor="text" className="f6 b db mb2">
                Text
              </label>
              <textarea
                className="scrollabletextbox"
                id="text"
                name="text"
                onChange={this.onInputChange}
              ></textarea>
            </div>
          </div>
          <div className="pa2 w-100">
            <Link to="/forum">
              <Button
                className="fr"
                variant="contained"
                onClick={this.writePost}
              >
                Post
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WritePostPage;
