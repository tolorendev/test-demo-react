import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Sang", age: "16" },
      { id: 2, name: "Toloren", age: "26" },
      { id: 3, name: "Tosang", age: "33" },
    ],
  };
  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };
  // JSX
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
