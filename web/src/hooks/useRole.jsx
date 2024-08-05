import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./axios/useAxios";

const useRole = () => {
  const Axios = useAxios();
  const [role, setRole] = useState("");
  const { user, loading } = useAuth();
  const [Loading, setloading] = useState(false);
  useEffect(() => {
    if (!loading && user) {
      setloading(true);
      Axios.get(`/auth/role?email=${user?.email}`)
        .then((response) => {
          setRole(response.data.data.role);
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    }
  }, [loading]);
  return {
    user,
    loader: loading || Loading,
    role,
  };
};

export default useRole;
