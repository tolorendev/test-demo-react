import "./App.scss";

import MyComponent from "./components/MyComponent";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world &amp; Hỏi dân IT
        <MyComponent></MyComponent>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <MyComponent></MyComponent>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Hello world!</p>
//           <div>Count = {count}</div>
//           <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//           <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//         </header>
//       </div>
//     </>
//   );
// };

export default App;
