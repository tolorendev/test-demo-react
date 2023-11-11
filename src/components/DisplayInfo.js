import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };
  handleShowHide() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  // JSX
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);

    return (
      <div className="display-info-container">
        {/* <img src={logo} alt="logo" /> */}
        <div>
          <button onClick={() => this.handleShowHide()}>
            {this.state.isShow ? "Hide" : "Show"} list users:
          </button>
        </div>
        <div>
          {this.state.isShow &&
            listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div> My name: {user.name}</div>
                  <div> My age: {user.age}</div>
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    x
                  </button>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default DisplayInfo;
