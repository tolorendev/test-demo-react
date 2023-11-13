import React, { useState } from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

// Stateless component
// class DisplayInfo extends React.Component {
//   // JSX
//   render() {
//     console.log(">>> Call me render ");
//     const { listUsers } = this.props;
//     console.log(listUsers);

//     return (
//       <div className="display-info-container">
//         {/* <img src={logo} alt="logo" /> */}

//         <div>
//           {true &&
//             listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div> My name: {user.name}</div>
//                   <div> My age: {user.age}</div>
//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     x
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const [isShowUser, setIsShowUser] = useState(true);
  const { listUsers } = props;
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
};
export default DisplayInfo;
