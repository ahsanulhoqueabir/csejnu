import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { getImage } from "../utilities/functions";
import BreadCrumb from "../Components/common/BreadCrumb";
import Lottie from "lottie-react";
import anim from "../assets/animation/cube.json";
import LoadingPage from "../Shared/LoadingPage";
import ErrorPage from "../Shared/ErrorPage";
import CRProfile from "../Components/batch/CRProfile";
const Batch = () => {
  const { batchid } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(`/batch/find?batchId=${batchid}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [batchid]);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  const { cr } = data;
  return (
    <>
      <BreadCrumb page={batchid} />
      <div>
        <img
          className="h-48 lg:h-72 w-full object-cover rounded-lg"
          src={getImage("cover", "cse.png")}
          alt=""
        />
      </div>
      <div className="flex gap-5 py-8 items-center">
        <div className="w-full">
          <h1 className="text-3xl font-semibold capitalize pb-4">
            class representative
          </h1>
          <div className="space-y-5">
            {cr.male && <CRProfile info={cr.male.personal} />}
            {cr.female && <CRProfile info={cr.female.personal} />}
          </div>
          <div className="pt-8">
            <span className="block font-semibold text-info-content">
              Check about its
            </span>
            <div className="grid gap-5 lg:grid-cols-2  md:space-x-6 md:flex md:justify-center lg:justify-start pt-5">
              <Link
                aria-label="Buses"
                to={`/students/batch/${batchid}`}
                className="p-4 border border-teal-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30 w-full"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="size-6"
                    src={getImage("icon", "students.svg")}
                    alt="slack logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className=" font-medium dark:text-white">Students</span>
                </div>
              </Link>{" "}
              <Link
                aria-label="Routes"
                to={`/routine/batch/${batchid}`}
                className="p-4 border border-teal-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30 w-full"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src={getImage("icon", "routine.svg")}
                    alt="Route logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className=" font-medium dark:text-white">Routine </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <Lottie animationData={anim} />
        </div>
      </div>
    </>
  );
};

export default Batch;
