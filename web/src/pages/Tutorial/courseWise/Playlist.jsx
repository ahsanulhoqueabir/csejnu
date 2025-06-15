import { useNavigate } from "react-router-dom";
import { getImage, getSemester } from "../../../utility/functions";

const Playlist = ({ course }) => {
  const navigate = useNavigate();
  const path = course.course.CourseTitle.replace(/ /g, "-");
  return (
    <section
      onClick={() => {
        navigate(`/academic/tutorial-online/${path}`);
      }}
      className="bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg rounded-md cursor-pointer"
    >
      <section className="p-3 cardbg lg:flex gap-5 rounded-md">
        <div className="pb-5">
          <img
            className="h-60 w-96 lg:h-48  rounded-sm shadow-md shadow-green-100 border-[1px]"
            src={getImage("courses", `${course._id}.png`)}
            alt=""
          />
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-bold">{course.course.CourseTitle}</h1>
          <p className="text-lg">
            <strong>Code: </strong> {course.course.CourseCode}
          </p>
          <p className="text-lg">
            <strong>Teacher: </strong> {course.course.courseTeacher}
          </p>
          <p className="text-lg">
            <strong>Credit: </strong> {course.course.Credit}
          </p>
          <p className="text-lg">
            <strong>Marks: </strong> {course.course.Marks}
          </p>
          <p className="text-lg">
            <strong>Semester: </strong> {getSemester(course.course.semester)}
          </p>
        </div>
      </section>
    </section>
  );
};

export default Playlist;

{
  /* <div className="relative w-fit">
  <img className="h-48" src={getImage("courses", "banner.png")} alt="" />
  <p className="absolute top-1/2 w-full text-center">
    {course.course.CourseTitle}
  </p>
</div>; */
}

/**
 * E3F4F4
 *
 */
