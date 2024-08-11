import EditInfo from "../pages/MyProfile/Edit/EditInfo";
import UserProfile from "../pages/MyProfile/ProfileDetails/UserProfile";
import Update from "../pages/MyProfile/Edit/Update";
import UpdateInfo2 from "../pages/MyProfile/UpdateInfo/UpdateInfo2";
import MyNotes from "../pages/Note/MyNotes";
import UpdateNotes from "../pages/Note/UpdateNotes";
import PrivateRoute from "./PrivateRoute";

const UserDetailsRoute = [
  {
    path: "details/profile",
    element: (
      <PrivateRoute>
        <UserProfile />
      </PrivateRoute>
    ),
  },
  {
    path: "MyNotes",
    element: (
      <PrivateRoute>
        <MyNotes />
      </PrivateRoute>
    ),
  },
  {
    path: "updateNotes/:id",
    element: <UpdateNotes />,
  },
  {
    path: "update-info",
    element: (
      <PrivateRoute>
        <Update />
      </PrivateRoute>
    ),
  },
  {
    path: "edit-info",
    element: <EditInfo />,
  },
];

export default UserDetailsRoute;
