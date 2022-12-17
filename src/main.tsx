import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/itim";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Project from "./Pages/Projects/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/projects",
        element: <Project />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
