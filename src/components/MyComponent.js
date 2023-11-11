import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // JSX
  render() {
    return (
      <div>
        <UserInfo />
        <br /> <br />
        <DisplayInfo name="Sang" age="30" />
        <hr />
        <DisplayInfo name="Minh" age="44" />
      </div>
    );
  }
}
export default MyComponent;
