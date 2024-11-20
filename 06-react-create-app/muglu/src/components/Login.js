import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-black">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
        alt="muglu-bg"
      />
      <form>
        <input type="text" placeholder="Email or phone number" className="p-2 m-2" />
        <input type="text" placeholder="Password" className="p-2 m-2"/>
        <button className="p-2 m-2">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
