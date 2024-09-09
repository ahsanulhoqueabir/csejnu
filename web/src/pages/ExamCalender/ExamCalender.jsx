import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import LoadingPage from "../../pages/Shared/LoadingPage";
import ErrorPage from "../../pages/Shared/ErrorPage";
import Banner from "../../components/Banner";
import { timeConvert } from "../../utility/functions";

const ExamCalender = () => {
  const axiosPublic = useAxiosPublic();
  const [examCalender, setExamCalender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axiosPublic
      .get("/routine/get-exam-calender?batch=B210305")
      .then((response) => {
        setExamCalender(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <Banner>Exam Calender</Banner>
      <section className="py-8 px-3 lg:px-20 overflow-x-auto">
        <table className="table border border-info-content divide-x-[1px] divide-info-content rounded">
          <thead>
            <tr className="border border-info-content divide-x-[1px] divide-info-content text-xl text-info-content lg:text-2xl font-philosopher">
              <td>Title</td>
              <td>Course</td>
              <td>Date</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody className="">
            {examCalender.map((exam) => (
              <Exam key={exam._id} exam={exam} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ExamCalender;

const Exam = ({ exam }) => {
  const d = new Date(exam.date).toDateString();
  const time = timeConvert(exam.time);
  return (
    <tr className="border border-info-content divide-x-[1px] divide-info-content">
      <td>{exam.name}</td>
      <td>{exam.course.CourseTitle}</td>
      <td>{d}</td>
      <td>{time}</td>
    </tr>
  );
};
