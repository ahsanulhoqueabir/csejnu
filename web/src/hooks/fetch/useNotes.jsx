import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

const useNotes = () => {
  const [allNotes, setALlNotes] = useState([]);
  const [loading, setloading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get("/notes")
      .then((res) => {
        setALlNotes(res.data.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    allNotes,
    loading,
  };
};

export default useNotes;
