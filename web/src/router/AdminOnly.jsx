import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import NotAuthorized from "../pages/Shared/NotAuthorized";
import LoadingPage from "../pages/Shared/LoadingPage";
const Admin = [
  "contact.ahsanul@gmail.com",
  "sanjilanusrat52@gmail.com",
  "rup23450@gmail.com",
];
const AdminOnly = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const isAdmin = user && Admin.includes(user.email);
  // const isAdmin =
  //   user &&
  //   user.email ===
  //     ("contact.ahsanul@gmail.com" ||
  //       "sanjilanusrat52@gmail.com" ||
  //       "rup23450@gmail.com");
  if (loading) {
    return <LoadingPage />;
  }
  if (isAdmin) {
    return children;
  }
  return <NotAuthorized />;
};

export default AdminOnly;
