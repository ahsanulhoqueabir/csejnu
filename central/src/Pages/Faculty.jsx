import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import LoadingPage from "../Shared/LoadingPage";
import ErrorPage from "../Shared/ErrorPage";
import BreadCrumb from "../Components/common/BreadCrumb";
import SingleFaculty from "../Components/faculty/SingleFaculty";
const Faculty = () => {
  const axiosPublic = useAxiosPublic();
  const [faculties, setFaculties] = useState({
    professor: {
      designation: "Professor",
      faculty: [],
    },
    associateProfessor: {
      designation: "Associate Professor",
      faculty: [],
    },
    assistantProfessor: {
      designation: "Assistant Professor",
      faculty: [],
    },
    lecturer: {
      designation: "Lecturer",
      faculty: [],
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("faculty/all?dept_id=D0305")
      .then((res) => {
        setFaculties({
          professor: {
            designation: "Professor",
            faculty: [],
          },
          associateProfessor: {
            designation: "Associate Professor",
            faculty: [],
          },
          assistantProfessor: {
            designation: "Assistant Professor",
            faculty: [],
          },
          lecturer: {
            designation: "Lecturer",
            faculty: [],
          },
        });
        const data = res.data.faculty;
        data.map((fac) => {
          if (fac.position === "Professor") {
            setFaculties((prev) => ({
              ...prev,
              professor: {
                ...prev.professor,
                faculty: [...prev.professor.faculty, fac],
              },
            }));
          } else if (fac.position === "Assistant Professor") {
            setFaculties((prev) => ({
              ...prev,
              assistantProfessor: {
                ...prev.assistantProfessor,
                faculty: [...prev.assistantProfessor.faculty, fac],
              },
            }));
          } else if (fac.position === "Associate Professor") {
            setFaculties((prev) => ({
              ...prev,
              associateProfessor: {
                ...prev.associateProfessor,
                faculty: [...prev.associateProfessor.faculty, fac],
              },
            }));
          } else if (fac.position === "Lecturer") {
            setFaculties((prev) => ({
              ...prev,
              lecturer: {
                ...prev.lecturer,
                faculty: [...prev.lecturer.faculty, fac],
              },
            }));
          }
        });

        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <BreadCrumb page={"Faculty"} />
      <div className="grid gap-5">
        {Object.keys(faculties).map((pos, index) => (
          <div key={index}>
            <div className="w-full bg-base-200 py-2  rounded-md">
              <h1 className="text-xl lg:text-3xl text-center font-philosopher">
                {faculties[pos].designation}
              </h1>
            </div>
            <div className="grid  lg:grid-cols-3 gap-5 py-5 pt-12">
              {faculties[pos].faculty.map((faculty, index) => (
                <SingleFaculty key={index} faculty={faculty} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faculty;
