import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Overview from "../Pages/Overview";
import Students from "../Pages/Students";
import StudentDetails from "../Pages/StudentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "students/batch/:batchid",
        element: <Students />,
      },
      {
        path: "students/details/:id",
        element: <StudentDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
