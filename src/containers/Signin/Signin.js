import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Signin extends React.Component {
  render() {
    const { onInputChange, onSubmitSignIn } = this.props;
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
                id="email"
                onChange={onInputChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onInputChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={() => {
                onSubmitSignIn();
              }}
            />
          </div>
          <div className="lh-copy mt3">
            <Link to="/register" className="f6 link dim black db">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Signin;
