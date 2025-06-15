import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import BreadCrumb from "../Components/common/BreadCrumb";
import LoadingPage from "../Shared/LoadingPage";
import ErrorPage from "../Shared/ErrorPage";
import Day from "../Components/ClassRoutine/Day";
const ClassRoutine = () => {
  const [routine, setRoutine] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("routine/find?calender=cse-2024-first")
      .then((res) => {
        setRoutine(res.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  const { allbatch } = routine;
  return (
    <>
      <BreadCrumb page={"class-routine"} />

      <div className="grid gap-5">
        {allbatch.map((data, index) => (
          <Day key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default ClassRoutine;
