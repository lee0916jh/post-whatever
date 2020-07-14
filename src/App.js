import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./containers/Home/Home";
import Forum from "./containers/Forum/Forum";
import Register from "./containers/Register/Register";
import Signin from "./containers/Signin/Signin";
import Profile from "./containers/Profile/Profile";

import Container from "@material-ui/core/Container";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      id: 0,
      name: "Anonymous",
      email: "",
      password: "",
      joined: "",
    };
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
  }
  signOut = () => {
    this.setState({ isLoggedIn: false });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://secret-headland-89973.herokuapp.com/signin", {
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
            posts: data.posts,
            joined: data.joined,
            id: data.id,
          });
          alert("You are logged in!");
        } else {
          alert(data);
        }
      })
      .catch((err) => console.log(err));
  };

  onSubmitRegister = () => {
    fetch("https://secret-headland-89973.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ isLoggedIn: true, password: "hidden" });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { id, posts, isLoggedIn, email, password, name, joined } = this.state;
    return (
      <Router>
        <NavBar isLoggedIn={isLoggedIn} signOut={this.signOut} />
        <Container>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/forum">
              <Forum id={id} name={name} />
            </Route>
            <Route path="/register">
              <Register
                onInputChange={this.onInputChange}
                onSubmitRegister={this.onSubmitRegister}
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
            <Route path="/profile">
              <Profile
                name={name}
                email={email}
                joined={joined}
                posts={posts}
              />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
