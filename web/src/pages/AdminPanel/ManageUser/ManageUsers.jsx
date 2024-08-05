import React, { useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import UserRow from "./UserRow";
import useAxiosPublic from "../../../hooks/axios/useAxiosSecure";
import LoadingPage from "../../Shared/LoadingPage";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosPublic.get("/students/basicinfo").then((res) => {
      setStudents(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="min-h-screen">
      <Banner>Manage Users</Banner>
      <section>
        <div>
          {!loading && (
            <div className="px-5 lg:w-fit mx-auto py-10 overflow-x-auto">
              <table className="table border border-info-content">
                <thead>
                  <tr className="divide-x-2 border-b border-info-content divide-info-content text-lg ">
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {students?.map((mail, index) => (
                    <UserRow student={mail} key={index} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ManageUsers;
