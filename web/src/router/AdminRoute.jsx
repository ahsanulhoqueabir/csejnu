import ManageUsers from "../pages/AdminPanel/ManageUser/ManageUsers";
import NewExam from "../pages/AdminPanel/NewExam";
import AddNotice from "../pages/AdminPanel/Notice/AddNotice";
import UpcomingNotice from "../pages/AdminPanel/Notice/Components/UpcomingNotice";
import UpdateNotice from "../pages/AdminPanel/Notice/Components/UpdateNotice";
import NewNotice from "../pages/AdminPanel/Notice/NewNotice";
import SendEmail from "../pages/AdminPanel/SendEmail";
import AddNotes from "../pages/Note/AddNotes";
import AdminOnly from "./AdminOnly";
import PrivateRoute from "./PrivateRoute";

const AdminRoute = [
  {
    path: "/admin/upcoming-notices",
    element: (
      <AdminOnly>
        <UpcomingNotice />
      </AdminOnly>
    ),
  },
  {
    path: "admin/ManageNotice/UpdateNotice/:id",
    element: <UpdateNotice />,
  },
  {
    path: "/admin/addNotice",
    element: (
      <AdminOnly>
        <AddNotice />
      </AdminOnly>
    ),
  },
  {
    path: "admin/add-new-exam-schedule",
    element: (
      <AdminOnly>
        <NewExam />
      </AdminOnly>
    ),
  },
  {
    path: "/admin/manageusers",
    element: (
      <AdminOnly>
        <ManageUsers />
      </AdminOnly>
    ),
  },
  {
    path: "/admin/sendmail",
    element: (
      <AdminOnly>
        <SendEmail />
      </AdminOnly>
    ),
  },
  {
    path: "newNotice",
    element: <NewNotice />,
  },
  {
    path: "AddNote",
    element: (
      <PrivateRoute>
        <AddNotes />
      </PrivateRoute>
    ),
  },
];

export default AdminRoute;
