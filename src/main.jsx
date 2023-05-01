import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  { basename: "/Unilab-1/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
