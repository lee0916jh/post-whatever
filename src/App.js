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
  }

  signOut = () => {
    this.setState({ isLoggedIn: false });
  };

  register = () => [fetch("http://localhost:3000/register")];

  render() {
    const { posts, isLoggedIn } = this.state;
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
            <Register />
          </Route>
          <Route path="/signin">
            <Signin signIn={this.signIn} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
