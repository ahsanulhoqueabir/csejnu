import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import Student from "../Components/Students/Student";
import CardLoading from "../Shared/loader/CardLoading";
import Loader from "../Shared/loader/Loader";
import Pagination from "../Components/common/Pagination";
import ScrollToTop from "../Components/common/ScrollToTop";
import BreadCrumb from "../Components/common/BreadCrumb";

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
    // setCurrentItems(students.slice(startIndex, startIndex + itemsPerPage));
    currentItems = students.slice(startIndex, startIndex + itemsPerPage);
  }, [students, currentPage]);
  useEffect(() => {
    // Smooth scroll to the top whenever the values in para change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentItems]);
  if (loading) {
    return <CardLoading />;
  }
  return (
    <div>
      <BreadCrumb page={batchid} />
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
