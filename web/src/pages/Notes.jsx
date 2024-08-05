import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import LoadingPage from "./Shared/LoadingPage";
import Banner from "../components/Banner";
import useNotes from "../hooks/fetch/useNotes";
import Pagination from "../components/Pagination";
import { ScrollToTopOnRouteChange } from "../components/common/ScrollToTopOnRouteChange";
const Notes = () => {
  const { allNotes, loading } = useNotes();
  const [notes, setNotes] = useState(allNotes || []);
  useEffect(() => {
    setNotes(allNotes);
  }, [loading]);

  const [filterType, setFilterType] = useState("topic");

  const handleFilterType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterType(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const newNotes = [...allNotes];

    if (filterType === "courseName") {
      const searchResult = newNotes.filter((std) =>
        std.course.CourseTitle.toLowerCase().includes(value.toLowerCase())
      );
      setNotes(searchResult);
      setCurrentPage(1);
      return;
    } else {
      const searchResult = newNotes.filter((std) =>
        std[filterType].toLowerCase().includes(value.toLowerCase())
      );
      setNotes(searchResult);
      setCurrentPage(1);
    }
  };
  // pagination part
  const [itemsPerPage, setItemPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(notes.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  let currentItems = notes.slice(startIndex, endIndex);
  if (loading) {
    return <LoadingPage />;
  }
  // console.log(allNotes);
  return (
    <>
      <ScrollToTopOnRouteChange para={currentPage} />
      <div className="  mx-auto ">
        <Banner>Notes & Slides </Banner>
        <div className="py-10 lg:px-10 flex px-3 flex-col m-0 justify-center items-center">
          <div className="join w-fit">
            <div>
              <div>
                <form onChange={handleFilter}>
                  <input
                    className="input input-bordered w-[190px] focus:outline-none join-item"
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
              <option value="topic">Topic</option>
              <option value="author">Author</option>
              <option value="courseName">Course</option>
            </select>
            {/* <div className="indicator">
              <button className="py-2 px-4 bg-blue-200 hover:bg-teal-300 join-item">Search</button>
            </div> */}
          </div>

          {/* ------------------------------ notes table section ----------------------------- */}

          <div
            id="notes"
            className=" overflow-x-auto my-5 w-full mx-auto min-h-[calc(100vh-150px)]"
          >
            {currentItems?.length > 0 && (
              <table className="table border-2 border-black">
                <thead>
                  <tr className="font-bold text-md lg:text-lg">
                    <th className=" border-2 border-gray-200">Serial</th>
                    <th className=" border-2 border-gray-200">Author</th>
                    <th className=" border-2 border-gray-200">Course Name</th>
                    <th className=" border-2 border-gray-200">Topic</th>
                    <th className=" border-2 border-gray-200">View</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems?.map((note, index) => (
                    <tr className="text-xs lg:text-lg" key={index}>
                      <td className=" lg:text-lg  border-2 border-gray-200">
                        {index + startIndex + 1}
                      </td>
                      <td className=" lg:text-lg border-2 border-gray-200">
                        {note.author}
                      </td>
                      <td className=" lg:text-lg border-2 border-gray-200">
                        {note.course.CourseTitle}
                      </td>
                      <td className=" lg:text-lg border-2 border-gray-200">
                        {note.topic}
                      </td>
                      <td className=" lg:text-lg border-2 border-gray-200">
                        <a
                          href={note.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 text-2xl hover:text-blue-500"
                        >
                          <FaEye />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {allNotes.length == 0 && (
              <>
                <h1 className="text-center py-16">
                  Your search item doesn't match with any {filterType} . try
                  again.......
                </h1>
              </>
            )}
          </div>
          {/* -------------------- pagination part ---------------- */}
          <div>
            {notes.length && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                pageCount={totalPages}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
