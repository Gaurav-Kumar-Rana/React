import React from "react";
import logo from "../asset/logo_red.svg";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black w-full">
      <img src={logo} alt="logo" className="w-32" />
    </div>
  );
};

export default Header;
