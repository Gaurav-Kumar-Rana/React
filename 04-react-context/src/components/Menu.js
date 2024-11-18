import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="flex">
      <li className="m-5 p-5">
        <Link to="/">Main</Link>
      </li>
      <li className="m-5 p-5">
        <Link to="/main">Main Class</Link>
      </li>
    </ul>
  );
};

export default Menu;
