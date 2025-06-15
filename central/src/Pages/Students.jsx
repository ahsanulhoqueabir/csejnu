import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import Student from "../Components/Students/Student";
import CardLoading from "../Shared/loader/CardLoading";
import Pagination from "../Components/common/Pagination";
import BreadCrumb from "../Components/common/BreadCrumb";
import { getBatch } from "../utilities/functions";

const Students = () => {
  const navigate = useNavigate();
  const { batchid } = useParams();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(true);
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (batchid) {
      setReloading(true);
      axiosPublic
        .get(`/students/batchwise?batch=${batchid}&page=${page}`)
        .then((res) => {
          setStudents(res.data);
          // setStudents((prev) => [...prev, ...res.data]);
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
  }, [batchid]);
  // pagination part
  const [itemsPerPage, setItemPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  let currentItems = students.slice(startIndex, endIndex);

  useEffect(() => {
    currentItems = students.slice(startIndex, startIndex + itemsPerPage);
  }, [students, currentPage]);
  useEffect(() => {
    // Smooth scroll to the top whenever the values in para change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentItems]);
  if (loading || false) {
    return <CardLoading />;
  }
  const routes = [
    {
      name: "Home",
      icon: "FaHome",
      pack: "fa",
      path: "/",
    },
    {
      name: getBatch(batchid),
      icon: "FaFolderOpen",
      pack: "fa",
      path: `/batch/${batchid}`,
    },
    {
      name: "Students",
      icon: "FaFileMedicalAlt",
      pack: "fa",
    },
  ];
  return (
    <div>
      <BreadCrumb page={batchid} routes={routes} />
      <section className="grid pt-5 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentItems?.map((student, index) => (
          <Student
            page={page}
            setPage={setPage}
            student={student}
            key={index}
          />
        ))}
      </section>
      <div>
        {students.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            pageCount={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default Students;
