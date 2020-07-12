import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home/Home";
import Forum from "./containers/Forum/Forum";
import Register from "./containers/Register/Register";
import Signin from "./containers/Signin/Signin";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      password: "",
    };
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  signOut = () => {
    this.setState({ isLoggedIn: false });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          this.setState({
            isLoggedIn: true,
            name: data.name,
            email: data.email,
            joined: data.joined,
            posts: data.posts,
          });
          alert("You are logged in!");
        } else {
          alert(data);
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { posts, isLoggedIn, email, password, name } = this.state;
    return (
      <Router>
        <NavBar isLoggedIn={isLoggedIn} signOut={this.signOut} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about"></Route>
          <Route path="/forum">
            <Forum posts={posts} />
          </Route>
          <Route path="/login"></Route>
          <Route path="/register">
            <Register
              onInputChange={this.onInputChange}
              name={name}
              email={email}
              password={password}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/signin">
            <Signin
              isLoggedIn={isLoggedIn}
              onInputChange={this.onInputChange}
              onSubmitSignIn={this.onSubmitSignIn}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
