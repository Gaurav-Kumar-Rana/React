import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import App from "./components/App";
import Error from './components/Error';
import Email from "./components/Email";
import "./style/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home/:id",
        element: <Home />,
      },
    ],
    errorElement: <Error />
  },
  {
    path: "/email",
    element: <Email />,
  }
]);
root.render(<RouterProvider router={appRouter} />);
