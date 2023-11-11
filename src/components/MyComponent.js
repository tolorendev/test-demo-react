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
    console.log("My name is", this.state.name);

    this.setState({
      name: "Harry",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }
  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} <br />
        My age is {this.state.age} <br />
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        {/* <button onClick={this.handleClick.bind(this)}>Click me</button> */}
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    );
  }
}
export default MyComponent;
