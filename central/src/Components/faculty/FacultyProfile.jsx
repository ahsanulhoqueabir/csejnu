import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import LoadingPage from "../../Shared/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage";
import { getImage } from "../../utilities/functions";
import BreadCrumb from "../common/BreadCrumb";
import Card from "./Card";
const FacultyProfile = () => {
  const { id } = useParams();
  const name = id.split("-").join(" ");
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosPublic
      .get(`/faculty/find?name=${name}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  const { personal, position, addressInfo, department } = data;
  const routes = [
    {
      name: "Home",
      path: "/",
      icon: "FaHome",
      pack: "fa",
    },
    {
      name: "Faculty",
      path: "/faculty",
      icon: "FaFolderOpen",
      pack: "fa",
    },
    {
      name: name,
      path: `/faculty/${id}`,
      icon: "FaUserTie",
      pack: "fa",
    },
  ];
  return (
    <>
      <BreadCrumb page={name} routes={routes} />
      <div className=" -mx-5 lg:-mx-20 relative">
        <div className="">
          <img
            className="h-48 lg:h-72 w-full object-cover rounded-lg"
            src={getImage("cover", "cse.png")}
            alt=""
          />
        </div>
        <div className="px-5 lg:px-20 relative">
          <div className="absolute -top-5 rounded-md ">
            <Card data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyProfile;
