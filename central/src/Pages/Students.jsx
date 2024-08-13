import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import Student from "../Components/Students/Student";
import CardLoading from "../Shared/loader/CardLoading";

const Students = () => {
  const { batchid } = useParams();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState();
  useEffect(() => {
    if (batchid) {
      axiosPublic
        .get(`/students/batchwise?batch=${batchid}`)
        .then((res) => {
          setStudents(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [batchid]);
  if (loading) {
    return <CardLoading />;
  }
  return (
    <div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {students?.map((student, index) => (
          <Student student={student} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Students;
