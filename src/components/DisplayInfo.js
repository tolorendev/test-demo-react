import React from "react";

class DisplayInfo extends React.Component {
  // JSX
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);

    return (
      <div>
        {listUsers.map((user) => (
          <div key={user.id}>
            <div> My name: {user.name}</div>
            <div> My age: {user.age}</div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
export default DisplayInfo;
