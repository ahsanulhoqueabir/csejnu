import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

const useTutorial = () => {
  const axiosSecure = useAxiosSecure();
  const [Alltutorials, setTutorial] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure
      .get("/tutorial/coursewise")
      .then((res) => {
        setTutorial(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return {
    Alltutorials,
    loading,
  };
};

export default useTutorial;
