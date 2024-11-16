import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to={"/home/"+2}>Home</Link>
        </li>
        <li>
          <Link to="/email">Email</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
