import React from "react";
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
  const { listUsers } = props;
  console.log(listUsers);

  return (
    <div className="display-info-container">
      <div>
        {true &&
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
