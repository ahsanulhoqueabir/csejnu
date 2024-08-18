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
import Courses from "../Pages/Courses";
import ClassRoutine from "../Pages/ClassRoutine";
import Batch from "../Pages/Batch";
import BatchRoutine from "../Pages/BatchRoutine";
import Faculty from "../Pages/Faculty";
import FacultyProfile from "../Components/faculty/FacultyProfile";

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
        path: "routine/batch/:batchid",
        element: <BatchRoutine />,
      },
      {
        path: "batch/:batchid",
        element: <Batch />,
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
        path: "courses",
        element: <Courses />,
      },
      {
        path: "class-routine",
        element: <ClassRoutine />,
      },
      {
        path: "faculty",
        element: <Faculty />,
      },
      {
        path: "faculty/profile/:id",
        element: <FacultyProfile />,
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
