import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Headline from "../../components/Headline";
import LoadingPage from "../Shared/LoadingPage";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyNotes = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading, myData } = useAuth();
  const [loader, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get(`/notes/mynotes?email=${user?.email}`).then((res) => {
      setNotes(res.data);
      setLoading(false);
    });
  }, [myData]);
  const handleDelete = (id) => {
    const url = `/notes/delete?id=${id}`;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(url).then((res) => {
          if (res.data.success) {
            const newNotes = notes.filter((note) => note._id !== id);
            setNotes(newNotes);
          }
        });
        toast.success("Notes deleted Successfully");
      }
    });
  };
  const handleEdit = (id) => {
    navigate(`/updateNotes/${id}`);
  };

  if (loading || loader || !user) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-screen">
      <Banner>
        <Headline>My Notes</Headline>
      </Banner>
      <section className=" lg:px-24 py-10 px-5">
        <div className=" overflow-x-auto">
          {notes.length > 0 ? (
            <table className="table  border border-info-content">
              <thead>
                <tr className="divide-x-[1px] divide-info-content  text-info-content">
                  <th>Action</th>
                  <th>Title</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody className="divide-y-[1px] divide-info-content ">
                {notes.map((note) => (
                  <tr
                    key={note._id}
                    className="divide-x-[1px] divide-info-content"
                  >
                    <td className="flex flex-col gap-2 items-center ">
                      <button
                        onClick={() => handleEdit(note._id)}
                        className=" "
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(note._id)}
                        className=""
                      >
                        <FaTrash className="text-red-700" />
                      </button>
                    </td>
                    <td>{note.topic}</td>
                    <td>
                      <a href={note.link}>{note.link.slice(0, 60)}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center pt-10">
              No notes found. Please add some notes.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyNotes;
