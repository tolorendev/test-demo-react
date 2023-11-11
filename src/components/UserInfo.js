import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi dan IT",
    age: "30",
  };

  handleOnChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleOnChangeAge(event) {
    this.setState({ age: event.target.value });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        My name is {this.state.name}, and I'am {this.state.age} <br />
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <label>Your Age: </label>
          <input
            value={this.state.age}
            type="number"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
