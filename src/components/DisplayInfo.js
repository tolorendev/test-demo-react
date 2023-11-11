import React from "react";

class DisplayInfo extends React.Component {
  // JSX
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        My name: {name}
        <br />
        My age: {age}
      </div>
    );
  }
}
export default DisplayInfo;
