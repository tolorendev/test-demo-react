import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi dan IT",
    age: "30",
  };

  handleOnChange(event) {
    this.setState({ name: event.target.value });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, and I'am {this.state.age} <br />
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
