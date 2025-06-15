import { useEffect, useState } from "react";
import useAxiosPublic from "../axios/useAxiosSecure";
const useNotice = () => {
  const axiosPublic = useAxiosPublic();
  const [noticeLoading, setNoticeLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/notice")
      .then((res) => {
        setNotices(res.data);
        setNoticeLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    noticeLoading,
    notices,
  };
};

export default useNotice;
