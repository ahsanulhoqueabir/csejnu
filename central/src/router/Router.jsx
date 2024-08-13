import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Overview from "../Pages/Overview";
import Students from "../Pages/Students";
import StudentDetails from "../Pages/StudentDetails";
import PageNotFound from "../Shared/PageNotFound";
import LoadingPage from "../Shared/LoadingPage";
import QueryPage from "../Pages/QueryPage";

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
      {
        path: "query-students",
        element: <QueryPage />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      },
      {
        path: "page-not-found",
        element: <PageNotFound />,
      },
      {
        path: "loading-page",
        element: <LoadingPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
