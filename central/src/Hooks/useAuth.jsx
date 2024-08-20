import { useContext } from "react";
import { authContext } from "../ContextProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default useAuth;
