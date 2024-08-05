import { useEffect, useState } from "react";
import StudentIDCard from "./StudentIDCard";
import SkeletonProfile from "./SkeletonProfile";
import Banner from "../../components/Banner";
import Pagination from "../../components/Pagination";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
const Students = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axiosSecure.get("/students/allstudents?sortby=id&order=asc").then((res) => {
      setStudents(res.data);
      setLoading(false);
    });
  }, []);
  // usestate hooks for pagination ----------------

  const [itemsPerPage, setItemPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  let currentItems = students.slice(startIndex, endIndex);

  if (loading) return <SkeletonProfile />;
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <Banner>Students ID Cards</Banner>
      <div className="pt-10 ">
        {students.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentItems.map((std) => (
              <StudentIDCard key={std.id} item={std} />
            ))}
          </div>
        )}
      </div>
      {/* -------------------- pagination part ---------------- */}
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

export default Students;
