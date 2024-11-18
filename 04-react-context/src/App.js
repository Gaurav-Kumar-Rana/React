import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
// import Main from "./components/Main";
// import MainClass from "./components/MainClass";
// import Error from "./components/Error";
import Loading from "./components/Loading";

const Main = lazy(() => import("./components/Main"));
const MainClass = lazy(() => import("./components/MainClass"));
const Error = lazy(() => import("./components/Error"));

const root = ReactDom.createRoot(document.getElementById("root"));

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
  },
  {
    path: "/main",
    element: (
      <Suspense fallback={<Loading />}>
        <MainClass />
      </Suspense>
    ),
  },
]);

// const routeConfig = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/main",
//     element: <MainClass />,
//   },
// ]);

root.render(<RouterProvider router={routeConfig} />);
