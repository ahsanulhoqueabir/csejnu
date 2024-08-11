import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import LoadingPage from "../../../Shared/LoadingPage";
import Class from "./Class";
import Comments from "./Comments";

const ClassDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(`/comments/content?id=${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5 lg:px-28 py-10 grid md:flex gap-7">
      <Class item={data.content} />
      <div className="md:w-[40%]">
        <Comments tutorial={data.content} comments={data.comments} />
      </div>
    </div>
  );
};

export default ClassDetails;
