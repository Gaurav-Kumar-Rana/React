import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import Menu from "./Menu";
const Main = () => {
  const [num, setNum] = useState(1);
  const { username, dateofbirth } = useContext(UserContext);
  const handleAdd = (number) => {
    setNum(num + number);
  };
  const handleSub = (number) => {
    setNum(num - number);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => num + 1);
    }, 1000);
    return () => {
      console.log("Main remove");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="main-container text-3xl font-bold underline text-center">
      <h1>
        {username} and your DOB is {dateofbirth}
      </h1>
      <button
        type="button"
        className="p-5"
        onClick={() => {
          handleSub(1);
        }}
      >
        -
      </button>
      <input
        type="number"
        value={num}
        className="m-10 bg-red-200 text-center"
        onChange={(e) => {
          setNum(+e.target.value);
        }}
      />
      <button
        type="button"
        className="p-5"
        onClick={() => {
          handleAdd(1);
        }}
      >
        +
      </button>
      <Menu/>
    </div>
  );
};

export default Main;
