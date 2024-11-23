import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Menu />
      <Outlet />
    </div>
  );
};

export default App;
