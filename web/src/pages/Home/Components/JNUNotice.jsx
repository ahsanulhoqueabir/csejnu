import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/axios/useAxiosPublic";
import LoaderComponent from "../../Shared/LoaderComponent";
import Headline from "../../../components/Headline";
import SingleNotice from "./SingleNotice";
const JNUNotice = () => {
  const axiosPublic = useAxiosPublic();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosPublic
      .get("/jnu/notices?limit=6")
      .then((res) => {
        setNotices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoaderComponent />;
  }
  return (
    <div className="pt-10">
      <Headline>JnU Notice</Headline>
      <section className="grid lg:grid-cols-2 gap-6">
        {!loading &&
          notices.map((notice, ind) => (
            <SingleNotice key={ind} notice={notice} index={ind} />
          ))}
      </section>
    </div>
  );
};

export default JNUNotice;
