import { getSemester } from "../../../utility/functions";

let width = screen.width;
const SemesterResult = ({ data }) => {
  const { results } = data;
  return (
    <div className=" w-full select-none">
      <p className="text-center py-3">
        <strong>Semester:</strong> {getSemester(data.semester)}
      </p>
      <div className="w-full overflow-x-auto mx-auto ">
        <table className="table border-2 border-info-content">
          <thead>
            <tr className="divide-x-2 divide-info-content text-info-content">
              <td>Course Code</td>
              <td>Course Name</td>
              {width > 1000 && (
                <>
                  <td>Credit</td>
                  <td>Type</td>
                  <td>Course Teacher</td>
                </>
              )}
              <td>Grade</td>
              <td>Grade Point</td>
            </tr>
          </thead>
          <tbody>
            {results.map((result, ind) => (
              <Course course={result} key={ind} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 items-start pt-5 justify-between">
        <Summary summary={data.summary} />
        {data.cumulative && <Cumulative cumulative={data.cumulative} />}
      </div>
    </div>
  );
};

export default SemesterResult;

const Course = ({ course }) => {
  //   console.log(course);
  return (
    <tr className="border-2 border-info-content divide-x-2 divide-info-content ">
      <td>{course.course.CourseCode}</td>
      <td>{course.course.CourseTitle}</td>
      {width > 1000 && (
        <>
          <td>{course.course.Credit}</td>
          <td>{course.course.CourseType}</td>
          <td>{course.course.courseTeacher}</td>
        </>
      )}
      <td className="text-center">{course.lg}</td>
      <td className="text-center">{course.gp}</td>
    </tr>
  );
};

const Summary = ({ summary }) => {
  return (
    <div className="">
      <strong>Summary:</strong>
      <p>Total Grade Point: {summary.tgp} </p>
      <p>Grade Point Average: {summary.gpa} </p>
      <p>Grade Point(Letter): {summary.lg}</p>
    </div>
  );
};

const Cumulative = ({ cumulative }) => {
  return (
    <div>
      <strong>Cumulative:</strong>
      <p>Sum of Previous Semesters TGP : {cumulative.prev_tgp} </p>
      <p>Total Grade Point(TGP): {cumulative.tgp}</p>
      <p>Total Credit Point(TCP): {cumulative.tcp} </p>
      <p>Earned Credit Point(ECP): {cumulative.ecp} </p>
      <p>CGPA: {cumulative.cgpa} </p>
    </div>
  );
};
