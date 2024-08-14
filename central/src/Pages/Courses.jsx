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
        for (let i = 0; i < 9; i++) {
          const ind = sem.indexOf(d[i]._id);
          if (ind !== -1) {
            data[ind] = d[i];
          }
        }
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

const sem = ["S11", "S12", "S21", "S22", "S31", "S32", "S41", "S42"];
