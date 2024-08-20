import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import AuthProvider from "./ContextProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
