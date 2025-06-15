import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";
import useAuth from "../useAuth";

const usePrivateFetch = (path, options) => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  if (user) {
    useEffect(() => {
      axiosSecure
        .get(path)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, [path, user]);
  }
  return {
    loading: loading || authLoading,
    data,
    error,
  };
};

export default usePrivateFetch;
