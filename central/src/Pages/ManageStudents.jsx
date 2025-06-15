import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import Student from "../Components/manageStudent/Student";
import Pagination from "../Components/common/Pagination";
import LoadingPage from "../Shared/LoadingPage";
import ErroPage from "../Shared/ErrorPage";
import { setTitle } from "../utilities/functions";

const ManageStudents = () => {
  setTitle("Manage Students");
  const axiosPublic = useAxiosPublic();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axiosPublic
      .get("/students/batchwise")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  // pagination logic
  const [itemsPerPage, setItemPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  let currentItems = students.slice(startIndex, endIndex);

  useEffect(() => {
    currentItems = students.slice(startIndex, startIndex + itemsPerPage);
  }, [students, currentPage]);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErroPage />;
  }
  return (
    <div className="">
      <div className="no-scrollbar overflow-x-auto">
        <table className="table border-2 border-info-content">
          <thead>
            <tr className="divide-x-2 divide-info-content text-info-content">
              <td>Photo</td>
              <td>Name</td>
              <td>Email</td>
              <td>Batch</td>
            </tr>
          </thead>
          <tbody className="border-2 border-info-content">
            {currentItems.map((student, index) => (
              <Student key={index} student={student} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {students.length && (
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

export default ManageStudents;
