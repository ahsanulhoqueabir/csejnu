import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Academic from "./Layout/Academic.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Students from "./pages/StudentID/Students.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import ErrorPage from "./pages/Shared/ErrorPage.jsx";
import StudentData from "./Layout/StudentData.jsx";
import StudentProfile from "./pages/StudentProfile/StudentProfile.jsx";
import FeaturesLog from "./pages/FeaturesLog.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./pages/AdminPanel/AdminPanel.jsx";
import LoadingPage from "./pages/Shared/LoadingPage.jsx";
import Notices from "./pages/Notices.jsx";
import NotAuthorized from "./pages/Shared/NotAuthorized.jsx";
import FileUpload from "./pages/Development/FileUpload.jsx";
import Faculty from "./pages/Faculty.jsx";
import AcademicRoutes from "./router/AcademicRoute.jsx";
import AdminRoute from "./router/AdminRoute.jsx";
import UserDetailsRoute from "./router/UserDetailsRoute.jsx";
import PageNotFound from "./pages/Shared/PageNotFound.jsx";
import Editor from "./pages/Editor/Editor.jsx";
import TextEditor from "./pages/Editor/TextEditor.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "academic",
        element: <Academic />,
        children: [...AcademicRoutes],
      },
      {
        path: "students",
        element: <StudentData />,
        children: [
          {
            path: "profileCard",
            element: <StudentProfile />,
          },
          {
            path: "idCard",
            element: (
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "students/profileCard/:id",
        element: <Portfolio />,
      },
      {
        path: "faculty",
        element: <Faculty />,
      },
      {
        path: "/allnotices",
        element: <Notices />,
      },
      ...AdminRoute,
      ...UserDetailsRoute,
      {
        path: "/fileupload",
        element: <FileUpload />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "not-authorized",
        element: <NotAuthorized />,
      },
      {
        path: "editor",
        element: <TextEditor />,
      },
    ],
  },

  {
    path: "/loadingpage",
    element: <LoadingPage />,
  },
  {
    path: "/features",
    element: <FeaturesLog />,
  },

  {
    path: "/adminpanel",
    element: <AdminPanel />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
