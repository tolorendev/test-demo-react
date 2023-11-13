import React, { useState } from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";



const DisplayInfo = (props) => {
  const [isShowUser, setIsShowUser] = useState(true);

  const handleShowHide = () => {
    setIsShowUser((prev) => !prev);
  };

  return (
    <div className="display-info-container">
      <button onClick={handleShowHide}>
        {isShowUser ? "Hide" : "Show"} list users
      </button>{" "}
      <br /> <br />
      <div>
        {isShowUser &&
          props.listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div> My name: {user.name}</div>
                <div> My age: {user.age}</div>
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  x
                </button>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default DisplayInfo;
