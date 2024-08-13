import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import Student from "../Components/Students/Student";
import CardLoading from "../Shared/loader/CardLoading";
import Loader from "../Shared/loader/Loader";

const Students = () => {
  const navigate = useNavigate();
  const { batchid } = useParams();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(true);
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setPage(1);
    setStudents([]);
  }, [batchid]);
  useEffect(() => {
    if (batchid) {
      setReloading(true);
      axiosPublic
        .get(`/students/batchwise?batch=${batchid}&page=${page}`)
        .then((res) => {
          // setStudents(res.data);
          setStudents((prev) => [...prev, ...res.data]);
          setLoading(false);
          setReloading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setReloading(false);
          navigate("/page-not-found");
        });
    }
  }, [batchid, page]);
  if (loading) {
    return <CardLoading />;
  }
  return (
    <div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {students?.map((student, index) => (
          <Student
            page={page}
            setPage={setPage}
            student={student}
            key={index}
          />
        ))}
      </section>
      {reloading && <Loader />}
    </div>
  );
};

export default Students;
