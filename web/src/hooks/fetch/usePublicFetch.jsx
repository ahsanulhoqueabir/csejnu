import { useEffect, useState } from "react";
import useAxiosPublic from "../axios/useAxiosPublic";
const usePublicFetch = (path, option) => {
  const axiosPublic = useAxiosPublic();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axiosPublic
      .get(path)
      .then((res) => {
        setdata(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    data,
    error,
  };
};

export default usePublicFetch;
