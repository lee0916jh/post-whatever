import React from "react";

class Profile extends React.Component {
  render() {
    const { name, email, posts, joined } = this.props;
    return (
      <>
        <p>Name: {`${name}`}</p>
        <p>Email: {`${email}`}</p>
        <p>Posts: {`${posts}`}</p>
        <p>Joined Date: {`${joined}`}</p>
      </>
    );
  }
}

export default Profile;
