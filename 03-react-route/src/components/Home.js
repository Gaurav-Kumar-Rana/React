import React from "react";
import {useParams } from "react-router-dom";
const Home = () => {
  const param = useParams();
  return <div>
    <h3>Home</h3>
    <div>link {param?.id}</div>
    </div>;
};

export default Home;
