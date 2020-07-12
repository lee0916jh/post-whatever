import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
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
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
                onChange={this.onInputChange}
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
