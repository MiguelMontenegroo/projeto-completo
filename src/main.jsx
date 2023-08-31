import React from "react";
import ReactDOM from "react-dom/client";
import MainTemplate from "./templates/MainTemplate/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorElement from "./pages/404/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
    ],
  },

]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
