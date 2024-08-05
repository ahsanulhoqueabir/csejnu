import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import LoadingPage from "./Shared/LoadingPage";
import Banner from "../components/Banner";
import usePrivateFetch from "../hooks/fetch/usePrivateFetch";
import { getSemester } from "../utility/functions";

const QuestionBank = () => {
  const { loading: qLoading, data, error } = usePrivateFetch("/qbank");
  const [QB, setQB] = useState(data || []);
  useEffect(() => {
    setQB(data);
  }, [data]);

  const [filterType, setFilterType] = useState("course");
  if (qLoading) {
    return <LoadingPage />;
  }
  if (error) {
    return (
      <div className="min-h-screen">
        <h1 className="text-center text-2xl text-red-500">
          {error.response.data.message}
        </h1>
      </div>
    );
  }
  const handleFilterType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterType(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (filterType === "course") {
      const searchResult = [...data].filter((std) =>
        std.course.CourseTitle.toLowerCase().includes(value.toLowerCase())
      );
      setQB(searchResult);
      return;
    } else {
      const searchResult = [...data].filter((std) =>
        std[filterType].toLowerCase().includes(value.toLowerCase())
      );
      setQB(searchResult);
      return;
    }
  };

  return (
    <div>
      <Banner>Question Bank</Banner>
      <div className="py-10 flex flex-col m-0 justify-center items-center">
        <div className="join w-fit">
          <div>
            <div>
              <form onChange={handleFilter}>
                <input
                  className="input capitalize input-bordered w-[220px] focus:outline-none join-item"
                  placeholder={`Search By ${filterType}
                  }`}
                />
              </form>
            </div>
          </div>
          <select
            onChange={handleFilterType}
            className="select focus:outline-none select-bordered join-item w-[100px]"
          >
            <option value="course">Course</option>
            <option value="Mid/Semester">Type</option>
          </select>
          {/* <div className="indicator">
              <button className="py-2 px-4 bg-blue-200 hover:bg-teal-300 join-item">Search</button>
            </div> */}
        </div>
        <div
          id="notes"
          className=" overflow-x-auto my-5 px-5 lg:px-20 w-full mx-auto"
        >
          {QB.length > 0 ? (
            <table className="table border-2 border-teal-300 ">
              <thead>
                <tr className="font-bold text-md text-base-100  bg-teal-300 lg:text-lg">
                  <th className=" border-2 border-teal-300">SL</th>
                  <th className=" border-2 border-teal-300">Semester</th>
                  <th className=" border-2 border-teal-300">Batch</th>
                  <th className=" border-2 border-teal-300">Course Name</th>
                  <th className=" border-2 border-teal-300">Question</th>
                  <th className=" border-2 border-teal-300">Solution</th>
                </tr>
              </thead>
              <tbody>
                {QB.map((note, index) => (
                  <tr
                    className={`text-xs lg:text-lg ${
                      index % 2 == 0 && "bg-base-300"
                    }`}
                    key={index}
                  >
                    <td className=" lg:text-lg  border-2 border-teal-300">
                      {index + 1}
                    </td>
                    <td className=" lg:text-lg  ordinal border-2 border-teal-300">
                      {getSemester(note.semester)}
                    </td>
                    <td className=" lg:text-lg ordinal border-2 border-teal-300">
                      {note.batch} Batch
                    </td>
                    <td className=" lg:text-lg border-2 border-teal-300">
                      {note.course.CourseTitle}
                    </td>
                    <td className=" lg:text-lg border-2 border-teal-300">
                      <a
                        href={note.Qurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" flex justify-center text-blue-400 text-2xl hover:text-blue-500"
                      >
                        <FaEye />
                      </a>
                    </td>
                    <td className=" lg:text-lg border-2 border-teal-300">
                      {note.Aurl.length ? (
                        <a
                          href={note.Aurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" flex justify-center text-blue-400 text-2xl hover:text-blue-500"
                        >
                          <FaEye />
                        </a>
                      ) : (
                        <p className="text-center">Not Available</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <h1 className="text-center py-16">
                Your search item doesn't match with any {filterType} . try
                again.......
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
