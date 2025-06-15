import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import LoadingPage from "../Shared/LoadingPage";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import useTutorial from "../../hooks/fetch/useTutorial";

const TutorialX = () => {
  const axiosSecure = useAxiosSecure();
  const { Alltutorials, loading } = useTutorial();
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setTutorials(Alltutorials);
  }, [loading]);
  const [videoLink, setVideoLink] = useState(null);
  const [Name, setName] = useState(null);
  const [topic, setTopic] = useState(null);

  const searchData = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const filteredData = Alltutorials.filter((item) => {
      return item.course.CourseTitle.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    });

    setTutorials(filteredData);
  };

  const handleSemester = (code) => {
    if (code === "S21") return "2nd Year 1st Semester";
  };
  const handleShow = (url, name, topic) => {
    setVideoLink(url);
    setName(name);
    setTopic(topic);
  };
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-screen">
      <Banner>Tutorials</Banner>
      <div className="py-10 flex justify-center items-center">
        <form onChange={searchData} className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search By Course Name"
            className="input input-bordered focus:outline-none input-normal w-full max-w-sm"
          />
          {/* <button
              className="py-2 px-5 bg-cyan-200 rounded-md hover:bg-teal-300 hover:delay-100 transition-all duration-200		"
              type="submit"
            >
              Search
            </button> */}
        </form>
      </div>
      <div
        id="myTutorial"
        className="mx-auto  w-[90%] lg:w-[60%] h-full items-center"
      >
        {videoLink && (
          <div className="relative flex flex-col my-10 ">
            <h2 className="text-center myText lg:text-2xl py-2 w-[90%]">
              You are watching {Name}'s {topic} Class
            </h2>
            <div className="border-4  lg:border-8 border-teal-600 shadow-2xl shadow-teal-400">
              <iframe
                className="h-[240px] md:h-[320px] lg:h-[450px] w-full"
                src={`https://www.youtube.com/embed/${videoLink}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setVideoLink(null)}
              className="absolute top-0 right-0 btn btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className=" overflow-x-auto mx-5  lg:mx-20">
        {tutorials.length > 0 ? (
          <table className="table border-2  shadow-2xl lg:text-xl rounded ">
            <thead className="bg-teal-300 text-base-100 lg:text-xl text-center">
              <tr>
                <th className="border-r-2">Serial</th>
                <th className="border-r-2">Semester</th>
                <th className="border-r-2">Course Name</th>
                <th className="border-r-2">Topic</th>
                <th>Watch</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map((item, idx) => (
                <tr
                  className={`${idx % 2 == 0 && "bg-base-300"}`}
                  key={item._id}
                >
                  <td className="border-r-2">{idx + 1} </td>
                  <td className="border-r-2">
                    {" "}
                    {handleSemester(item.course.semester)}{" "}
                  </td>
                  <td className="border-r-2">{item.course.CourseTitle}</td>
                  <td className="border-r-2">{item.topic} </td>
                  <td className="flex justify-center">
                    <a href="#myTutorial">
                      <FaEye
                        onClick={() =>
                          handleShow(
                            item.classURL,
                            item.course.CourseTitle,
                            item.topic
                          )
                        }
                        className="text-2xl lg:text-5xl"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Doestn't Match with any Course Name </p>
        )}
      </div>
    </div>
  );
};

export default TutorialX;
