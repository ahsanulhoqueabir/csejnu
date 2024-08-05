import { useEffect, useState } from "react";
import Student from "./Student";
import { ArrowDownLeftIcon } from "@heroicons/react/24/solid";
import Banner from "../../components/Banner";
import Pagination from "../../components/Pagination";
import useAxiosPublic from "../../hooks/axios/useAxiosSecure";
import SkeletonProfile from "../StudentID/SkeletonProfile";
import usePublicFetch from "../../hooks/fetch/usePublicFetch";
import ItemsNotFound from "../Shared/ItemsNotFound";

const StudentProfile = () => {
  const axiosPublic = useAxiosPublic();
  const { loading, data, error } = usePublicFetch("/students/allstudents");
  const [filterType, setFilterType] = useState("name");
  const [orderType, setOrderType] = useState("ran");
  const [students, setStudents] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!loading) {
      const mod = data.sort(() => Math.random() - 0.5);
      setStudents(mod);
    }
  }, [loading]);
  // usestate hooks for pagination ----------------

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

  const handleOrder = (e) => {
    const value = e.target.value;
    if (value === "ran") {
      setStudents([...students].sort(() => Math.random() - 0.5));
    } else if (value === "asc") {
      setLoader(true);
      axiosPublic
        .get("/students/allstudents?sortby=name&order=asc")
        .then((res) => {
          setOrderType("asc");
          setStudents(res.data);
          setLoader(false);
        });
    } else if (value === "dsc") {
      setLoader(true);
      axiosPublic
        .get("/students/allstudents?sortby=name&order=dsc")
        .then((res) => {
          setOrderType("dsc");
          setStudents(res.data);
          setLoader(false);
        });
    }
  };

  // to do some filter section code ----------------------
  const handleFilterType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterType(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (filterType === "name") {
      const searchResult = [...data].filter((std) =>
        std.personal.name.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentPage(1);
      setStudents(searchResult);
    } else if (filterType === "blood" || filterType === "religion") {
      const searchResult = [...data].filter((std) =>
        std.personal[filterType]?.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentPage(1);
      setStudents(searchResult);
    } else if (filterType === "institution") {
      const searchResult = [...data].filter((std) => {
        const instus = std.education;
        const instu = instus?.filter((ins) => {
          return ins.institution?.toLowerCase().includes(value.toLowerCase());
        });
        return instu.length > 0;
      });
      setCurrentPage(1);
      setStudents(searchResult);
    } else if (value) {
      const searchResult = [...data].filter((std) =>
        std[filterType]?.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentPage(1);
      setStudents(searchResult);
    } else {
      setStudents([...data]);
    }
  };

  if (loading || loader) {
    return <SkeletonProfile />;
  }

  return (
    <div>
      <Banner>See Students Profile Cards</Banner>
      <div>
        <h2 className="py-10 flex items-center gap-2 lg:gap-5 justify-center lg:text-2xl font-bold ">
          Customized Yours Window{" "}
          <span>
            {" "}
            <ArrowDownLeftIcon className="h-4 lg:h-6" />{" "}
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center pb-5 ">
          {/* order part  */}
          <div className="">
            <select
              onChange={handleOrder}
              defaultValue={orderType}
              className="focus:outline-none py-3 outline-1 outline-gray-300 bg-transparent outline   px-4 rounded"
            >
              <option className="hover:bg-blue-300  " value="ran">
                Random
              </option>
              <option className="hover:bg-blue-300 " value="asc">
                Ascending
              </option>
              <option className="hover:bg-blue-300 " value="dsc">
                Descending
              </option>
            </select>
          </div>
          {/* // another filter part  */}
          <div className="join w-fit">
            <div>
              <div>
                <form onChange={handleFilter}>
                  <input
                    className="input input-bordered w-[190px] focus:outline-none join-item"
                    placeholder={`Search By ${
                      filterType === "blood" ? "Blood Group" : filterType
                    }`}
                  />
                </form>
              </div>
            </div>
            <select
              onChange={handleFilterType}
              className="select focus:outline-none select-bordered join-item w-[100px]"
            >
              <option value="name">Name</option>
              <option value="blood">Blood Group</option>
              <option value="religion">Religion</option>
              <option value="institution">Institution Name</option>
            </select>
            {/* <div className="indicator">
              <button className="py-2 px-4 bg-blue-200 hover:bg-teal-300 join-item">Search</button>
            </div> */}
          </div>

          {/* -------------------------------------------- */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 lg:gap-8 lg:px-20  mx-auto">
        {/* {students?.map((std) => {
          console.log(std);
        })} */}
        {currentItems.length > 0 &&
          currentItems.map((std) => <Student key={std.id} item={std} />)}
      </div>
      {
        // if no student found
        students.length === 0 && <ItemsNotFound />
      }
      {/* -------------------- pagination part ---------------- */}
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

export default StudentProfile;
