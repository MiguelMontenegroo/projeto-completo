import React from "react";
import ReactDOM from "react-dom/client";
import MainTemplate from "./templates/MainTemplate/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorElement from "./pages/404/index.jsx";
import Cadastro from "./pages/Cadastro/index.jsx";
import HomePrincipal from "./pages/HomePrincipal/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: '/cadastro',
        element: <Cadastro/>,
      },
      {
        path: '',
        element: <HomePrincipal/>,
      },
    ],
  },
{
  path: '/login',
  element: <Login/>,
},


]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
