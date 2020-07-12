import React from "react";

const NavBar = ({ isLoggedIn, onSignOut }) => {
  const loginControl = !isLoggedIn ? (
    <>
      <a className="link dim gray f6 f5-ns dib mr3" href="/signin">
        Sign In
      </a>
      <a className="link dim gray f6 f5-ns dib mr3" href="/register">
        Register
      </a>{" "}
    </>
  ) : (
    <p className="link dim gray f6 f5-ns dib" onClick={onSignOut}>
      Sign Out
    </p>
  );
  return (
    <nav className="pa3 pa4-ns ttu">
      <a className="link dim black b f6 f5-ns dib mr3" href="/">
        Site Name
      </a>
      <a className="link dim gray f6 f5-ns dib mr3" href="/">
        Home
      </a>
      <a className="link dim gray f6 f5-ns dib mr3" href="/forum" title="Forum">
        Forum
      </a>
      {loginControl}
    </nav>
  );
};

export default NavBar;
