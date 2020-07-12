import React from "react";
import { Redirect } from "react-router";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: this.props.isLoggedIn };
  }

  logIn() {
    this.setState({ isLoggedIn: true });
  }

  onRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.props.name,
        email: this.props.email,
        password: this.props.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ isLoggedIn: true });
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.props.isLoggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <article className="pa4 black-80">
        <div action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="text"
                name="name"
                id="name"
                onChange={this.props.onInputChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email">
                Email address
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="email"
                name="email"
                id="email"
                onChange={this.props.onInputChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
                onChange={this.props.onInputChange}
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign Up"
              onClick={this.onRegister}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Register;
