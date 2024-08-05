import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";
import useAuth from "../useAuth";

const useUserdata = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userdata, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authLoading) {
      axiosSecure
        .get(`/students/queryData?email=${user?.email}`)
        .then((res) => {
          setUserData(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [, authLoading, user]);

  return {
    loading: loading || authLoading,
    data: userdata,
    error,
    setUserData,
  };
};

export default useUserdata;
