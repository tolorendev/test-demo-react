import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi dan IT",
    age: "30",
  };
  handleClick(event) {
    console.log(">> Click me my button");
    console.log(event);
    console.log(this.state.name);
  }
  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default MyComponent;
