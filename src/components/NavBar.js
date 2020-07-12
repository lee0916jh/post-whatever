import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, signOut }) => {
  const loginControl = !isLoggedIn ? (
    <>
      <Link className="link dim gray f6 f5-ns dib mr3" to="/signin">
        Sign In
      </Link>
      <Link className="link dim gray f6 f5-ns dib mr3" to="/register">
        Sign Up
      </Link>
    </>
  ) : (
    <Link className="link dim gray f6 f5-ns dib" to="/" onClick={signOut}>
      Sign Out
    </Link>
  );
  return (
    <nav className="pa3 pa4-ns ttu">
      <Link className="link dim black b f6 f5-ns dib mr3" to="/">
        Site Name
      </Link>
      <Link className="link dim gray f6 f5-ns dib mr3" to="/">
        Home
      </Link>
      <Link
        className="link dim gray f6 f5-ns dib mr3"
        to="/forum"
        title="Forum"
      >
        Forum
      </Link>
      {loginControl}
    </nav>
  );
};

export default NavBar;
