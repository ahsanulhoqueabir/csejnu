import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import LoadingPage from "./Shared/LoadingPage";
import Banner from "../components/Banner";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const loader = useNavigation();
  // if (loader.state === "loading") {
  //   return <LoadingPage />;
  // }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/faculty.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFaculty(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Banner>Our Enriched Faculty</Banner>
      <div className="px-3 overflow-x-auto py-10 ">
        {faculty && (
          <table className="table  w-fit mx-auto border-2 border-gray-500 ">
            <thead>
              <tr className="border-b-2 border-gray-500">
                <th className="border-r-2 border-gray-500">SL</th>
                <th className="border-r-2 border-gray-500">Faculty Name</th>
                <th className="border-r-2 border-gray-500">Designation</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map((faculty, index) => (
                <tr key={index} className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500"> {index + 1}.</td>
                  <td className="border-r-2 border-gray-500">{faculty.Name}</td>
                  <td className="border-r-2 border-gray-500">
                    {faculty.Designation}
                  </td>
                  <td>
                    <a href={`mailto:${faculty.Email}`}>{faculty.Email}</a>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Faculty;
