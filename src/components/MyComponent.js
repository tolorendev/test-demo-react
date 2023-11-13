import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: "1", name: "Sang", age: "16" },
    { id: "2", name: "Toloren", age: "26" },
    { id: "3", name: "Tosang", age: "33" },
  ]);
  const handleAddNewUser = (userObj) => {
    console.log(userObj);
    setListUsers((prevListUser) => [userObj, ...prevListUser]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers.slice();
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };
  // JSX

  return (
    <>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br /> <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};
export default MyComponent;
