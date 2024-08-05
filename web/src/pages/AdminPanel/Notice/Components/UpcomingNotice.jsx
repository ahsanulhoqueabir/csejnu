import React, { useContext, useEffect, useState } from "react";
import Banner from "../../../../components/Banner";
import { authContext } from "../../../../context/AuthProvider";
import Headline from "../../../../components/Headline";
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { dateConvert } from "../../../../utility/usefulfuntion";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import useAxiosPublic from "../../../../hooks/axios/useAxiosSecure";

const UpcomingNotice = () => {
  const axiosSecure = useAxiosSecure();
  const { upcomingNotices } = useContext(authContext);
  const [notices, setnotices] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/notice/upcoming").then((res) => {
      setnotices(res.data.data);
    });
  }, []);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const newNotice = upcomingNotices.filter((notice) => notice._id !== id);
    setnotices(newNotice);
    const url = `/notice/delete?id=${id}`;
    axiosSecure.delete(url).then((res) => {
      toast.success("Notice Deleted Successfully");
    });
  };
  const handleEdit = (id) => {
    navigate(`/admin/ManageNotice/UpdateNotice/${id}`);
  };
  return (
    <div className="w-full min-h-[calc(100vh-50px)]">
      <Banner>
        <Headline>Upcoming Notices</Headline>
      </Banner>
      <section className="py-10 px-4 lg:px-24">
        {notices.length > 0 ? (
          <div className=" ">
            <table className="table table-xs lg:table-lg">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Title</th>
                  <th>Description </th>
                  <th>Date </th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {notices?.map((notice) => (
                  <tr key={notice._id}>
                    <td className="flex flex-col gap-2 items-center ">
                      <button
                        onClick={() => handleEdit(notice._id)}
                        className=" "
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className=""
                      >
                        <FaTrash className="text-red-700" />
                      </button>
                    </td>
                    <td className=" text-wrap">{notice.title}</td>
                    <td className=" text-wrap">{notice.description}</td>
                    <td className=" text-nowrap">{dateConvert(notice.date)}</td>
                    <td className="text-nowrap ">{notice.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-xl lg:text-5xl text-center">
            No Upcoming Notice Available
          </h1>
        )}
      </section>
    </div>
  );
};

export default UpcomingNotice;
