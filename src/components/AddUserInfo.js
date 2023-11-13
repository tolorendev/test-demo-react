import React, { useState } from "react";

const AddUserInfo = (props) => {
  const [info, setInfo] = useState({
    name: "Eric",
    address: "Hoi dan IT",
    age: "30",
  });

  const handleOnChangeName = (event) => {
    setInfo({ ...info, name: event.target.value });
  };
  const handleOnChangeAge = (event) => {
    setInfo({ ...info, age: event.target.value });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(info);
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: info.name,
      age: info.age,
    });
  };

  return (
    <React.Fragment>
      My name is {info.name}, and I'am {info.age} <br />
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={info.name}
          type="text"
          onChange={(event) => handleOnChangeName(event)}
        />
        <label>Your Age: </label>
        <input
          value={info.age}
          type="number"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default AddUserInfo;
