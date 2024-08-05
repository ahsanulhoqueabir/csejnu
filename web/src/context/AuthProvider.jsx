import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxios from "../hooks/axios/useAxios";
export const authContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const Axios = useAxios();
  // all state---------------------------------
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Sign in method  ---------------------------
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      if (user) {
        setUser(user);
        Axios.post("/jwt", {
          email: user.email,
        }).then(async (res) => {
          localStorage.setItem("access-token", res.data.token);
          setLoading(false);
        });
      }
    });
  }, [user]);
  const logout = () => {
    return signOut(auth);
  };
  const authInfo = {
    loading,
    facebookLogin,
    googleLogin,
    user,
    setUser,
    logout,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
