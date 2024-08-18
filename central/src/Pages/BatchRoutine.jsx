import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/common/BreadCrumb";
import { getBatch } from "../utilities/functions";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import LoadingPage from "../Shared/LoadingPage";
import ErrorPage from "../Shared/ErrorPage";
import Routine from "../Components/batch/Routine";

const BatchRoutine = () => {
  const { batchid } = useParams();
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
  const routes = [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: getBatch(batchid),
      icon: "FaFolderOpen",
      pack: "fa",
      path: `/batch/${batchid}`,
    },
    {
      name: "Routine",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ];
  const { allbatch } = routine;

  return (
    <>
      <BreadCrumb page={"Routine"} routes={routes} />
      <div className="w-full">
        <Routine data={allbatch} batchid={batchid} />
      </div>{" "}
    </>
  );
};

export default BatchRoutine;
