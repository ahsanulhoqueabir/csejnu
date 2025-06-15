import LoadingPage from "./Shared/LoadingPage";
import { dateConvert } from "../utility/usefulfuntion";
import useNotice from "../hooks/fetch/useNotice";

const NoticeBoard = () => {
  const { noticeLoading, notices } = useNotice();
  if (noticeLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center myText">
        Notice Board - All Notices
      </h1>
      <div className=" overflow-x-auto mx-1 py-5">
        {notices.length > 0 ? (
          <table className="table border-2 border-teal-200 ">
            <thead className="capitalize bg-teal-200 text-black">
              <tr>
                <th className="border-r-2 border-teal-200">Tags</th>
                <th className="border-r-2 border-teal-200">course</th>
                <th className="border-r-2 border-teal-200">Room No.</th>
                <th className="border-r-2 border-teal-200">course teacher</th>
                <th className="border-r-2 border-teal-200">time</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((item, idx) => (
                <tr
                  className={`capitalize ${idx % 2 == 0 && "bg-base-300"}`}
                  key={idx}
                >
                  <td className="border-r-2 border-teal-200">
                    {item.tag?.map((i) => {
                      return i + ", ";
                    })}
                  </td>
                  <td className="border-r-2 border-teal-200">
                    {item.course.CourseTitle}
                  </td>
                  <td className="border-r-2 border-teal-200">{item.room}</td>
                  <td className="border-r-2 border-teal-200">
                    {item.course.courseTeacher}
                  </td>
                  <td className="border-r-2 border-teal-200">
                    {dateConvert(item.date)} {item.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h2 className="text-center">No Notice Available now!</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
