import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [newdata, setNewdata] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const email = form.email.value;
    const name = form.name.value;
    const batch = form.batch.value;

    let data = {
      id,
      batch,
      personal: {
        name: {
          fullName: name,
        },
        email,
        gender: "male",
      },
      education: {
        level: "university",
        ID: id,
        institution: "Jagannath University",
        major: "Computer Science and Engineering",
        passingYear: 2027,
        startYear: 2023,
        edumail: `${id}@cse.jnu.ac.bd`,
        board: "UGC",
      },
    };
    console.log(data);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:5000/api/v1/modified/add", data);
        Swal.fire({
          title: "Added!",
          text: "Your data has been added.",
          icon: "success",
        });
      }
    });
    // console.log(data);
    // e.target.reset();
  };

  return (
    <div>
      <h1 className="text-2xl text-center py-10">
        Admin Panel : Add Student Data
      </h1>
      <div className="mx-auto px-10 lg:w-2/3">
        <form onSubmit={handleSubmit} className="py-10 w-full ">
          <div className=" grid lg:grid-cols-2 gap-3">
            <div className="space-y-2 text-sm">
              <label>Name</label>
              <input
                name="name"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label>Batch</label>
              <input
                name="batch"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>ID</label>
              <input
                name="id"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>Email</label>
              <input
                name="email"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
          </div>
          <div className="mx-auto flex justify-center py-5">
            <button
              className="py-2 px-5 bg-blue-300 hover:bg-blue-400 text-black  rounded w-full "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
