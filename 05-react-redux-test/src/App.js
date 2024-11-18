import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./main.css";
import Loading from "./components/Loading";
import appStore from "./utils/appStore";

const Main = lazy(() => import("./components/Main"));
const MainClass = lazy(() => import("./components/MainClass"));
const Error = lazy(() => import("./components/Error"));
const Skill = lazy(() => import("./components/Skill"));

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
  {
    path: "/skill",
    element: (
      <Provider store={appStore}>
        <Suspense fallback={<Loading />}>
          <Skill />
        </Suspense>
      </Provider>
    ),
  },
]);

root.render(<RouterProvider router={routeConfig} />);
