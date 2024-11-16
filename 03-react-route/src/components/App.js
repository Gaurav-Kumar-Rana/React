import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
const App = () => {
  return (
    <div className="main-container">
      <h1>My React Routing app</h1>
      <div>App</div>
      <Menu/>
      <Outlet />
    </div>
  );
};

export default App;
