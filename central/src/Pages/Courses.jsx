import { useEffect, useState } from "react";
import BreadCrumb from "../Components/common/BreadCrumb";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../Shared/LoadingPage";
import Course from "../Components/Courses/Course";

const Courses = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axiosPublic
      .get("/courses/all")
      .then((res) => {
        const d = res.data;
        const data = [];
        data.push(d[2], d[6], d[5], d[1], d[8], d[3], d[4], d[0]);
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        navigate("/page-not-found");
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <BreadCrumb page={"courses"} />
      <div>
        {courses?.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </>
  );
};

export default Courses;

// 42 22 11 32 41 21 12 00 31
