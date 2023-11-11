import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi dan IT",
    age: "30",
  };
  // JSX
  render() {
    return <div>My name is {this.state.name}</div>;
  }
}
export default MyComponent;
