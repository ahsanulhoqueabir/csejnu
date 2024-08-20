import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/axios/useAxios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const Axios = useAxios();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const email_signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };
  const email_login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
  const logout = async () => {
    return signOut(auth).then((res) => {
      localStorage.removeItem("access-token");
      setUser(null);
    });
  };
  const authInfo = {
    loading,
    googleLogin,
    user,
    setUser,
    logout,
    email_signup,
    email_login,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
