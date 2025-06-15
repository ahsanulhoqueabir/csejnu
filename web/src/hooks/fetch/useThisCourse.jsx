import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";
import { useLocation } from "react-router-dom";

const useThisCourse = () => {
  const { pathname } = useLocation();
  const courseName = pathname.split("/").pop();
  const axiosSecure = useAxiosSecure();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure
      .get(`/tutorial/course?name=${courseName}`)
      .then((res) => {
        setClasses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return { classes, loading };
};

export default useThisCourse;
