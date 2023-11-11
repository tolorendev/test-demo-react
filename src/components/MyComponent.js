import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: "1", name: "Sang", age: "16" },
      { id: "2", name: "Toloren", age: "26" },
      { id: "3", name: "Tosang", age: "33" },
    ],
  };
  handleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
    // this.setState({
    //   listUsers: [...this.state.listUsers, userObj],
    // });
  };
  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);

    this.setState({
      listUsers: listUsersClone,
    });
  };
  // JSX
  render() {
    return (
      <React.Fragment>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfo
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </React.Fragment>
    );
  }
}
export default MyComponent;
