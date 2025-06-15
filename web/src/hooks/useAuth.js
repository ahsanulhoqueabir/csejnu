import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default useAuth;
