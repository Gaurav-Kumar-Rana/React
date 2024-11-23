import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import Add from "./components/Add";
import Edite from "./components/Edite";
import View from "./components/View";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/inventory", element: <View /> },
      { path: "/edite/:id", element: <Edite /> },
      { path: "/add", element: <Add /> },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
