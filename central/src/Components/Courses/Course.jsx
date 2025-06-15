import { getSemester } from "../../utilities/functions";
const Course = ({ course }) => {
  const { _id: id, data } = course;
  let total_marks = 0,
    total_credit = 0;
  data.forEach((item) => {
    total_marks += item.Marks;
    total_credit += item.Credit;
  });
  return (
    <div className="py-8">
      <h1 className="text-center pb-5 lg:text-4xl font-philosopher">
        {getSemester(id)}
      </h1>
      <div className=" overflow-x-scroll no-scrollbar">
        <table className="table table-auto border-2 border-info-content text-nowrap">
          <thead>
            <tr
              className="divide-x-[2px] border-[2px] 
            border-info-content text-info-content divide-info-content text-lg lg:text-2xl font-normal"
            >
              <td>Code</td>
              <td>Title</td>
              <td>Type</td>
              <td>Marks</td>
              <td>Credit</td>
            </tr>
          </thead>
          <tbody className="text-xs lg:text-lg divide-y-[2px]">
            {data.map((item, index) => (
              <Row key={index} item={item} />
            ))}
            <tr
              className="divide-x-2 border-[2px]  
            border-info-content divide-info-content"
            >
              <td colSpan="3" className="text-right">
                Total
              </td>
              <td>{total_marks}</td>
              <td>{total_credit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;

const Row = ({ item }) => {
  const { CourseCode, CourseTitle, CourseType, Credit, Marks } = item;
  return (
    <tr
      className=" divide-x-2 border-[2px] 
            border-info-content divide-info-content"
    >
      <td>{CourseCode}</td>
      <td>{CourseTitle}</td>
      <td>{CourseType}</td>
      <td>{Marks}</td>
      <td>{Credit}</td>
    </tr>
  );
};
