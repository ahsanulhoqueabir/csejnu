import React, { useEffect, useState } from "react";
import ExploreButton from "../../components/Button/ExploreButton";
import Swal from "sweetalert2";
import Banner from "../../components/Banner";
import Headline from "../../components/Headline";
import useAxiosPublic from "../../hooks/axios/useAxiosSecure";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const SendEmail = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [Students, setStudents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosPublic.get("/students/basicinfo").then((res) => {
      // setStudents(res.data);
      setStudents([
        {
          personal: {
            name: {
              fullName: "MD. AHSANUL HOQUE ABIR",
              nickname: "Ahsan",
            },
            email: "contact.ahsanul@gmail.com",
          },
          _id: "65c7a4ad24a9ae1a96b040bb",
          id: "B210305040",
          role: "admin",
        },
        {
          personal: {
            name: {
              fullName: "MD. AHSANUL HOQUE ABIR",
              nickname: "Ahsan",
            },
            email: "ahsan.csejnu@gmail.com",
          },
          _id: "65c7a4ad24a9ae1a96b040bb",
          id: "B210305040",
          role: "admin",
        },
      ]);
    });
  }, []);
  const handleMail = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const message = {
      title: title,
      description: description,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send This!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post(`/admin/sendmail?email=${user?.email}`, {
          info: message,
          students: Students,
        });
        // Swal.fire({
        //   title: "Sent!",
        //   text: "Message Send Successfully.",
        //   icon: "success",
        // });
        toast("Message Send Successfully.");
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-150px)] ">
      <Banner>
        <Headline>Send Mail</Headline>
      </Banner>
      <div className="lg:w-1/2 mx-auto py-20 px-5">
        <form onSubmit={handleMail} className="space-y-5">
          <div className={`space-y-2 text-sm `}>
            <label htmlFor={"Email Subject"}>{"Email Subject"}</label>
            <input
              required
              name="title"
              type="text"
              placeholder={"Email Subject"}
              className={`w-full text-base-100 bg-neutral placeholder:text-black px-4 py-3 rounded-md border border-indigo-300 focus:outline-none `}
            />
          </div>
          <div className={`space-y-2 text-sm `}>
            <label htmlFor={"Email Details"}>{"Email Details"}</label>

            <textarea
              required
              placeholder="Email Details"
              name="description"
              className="w-full text-base-100 bg-neutral placeholder:text-black px-4 h-20 py-2 rounded-md border border-indigo-300 focus:outline-none"
            ></textarea>
          </div>
          <ExploreButton onSubmit={handleMail}>Submit</ExploreButton>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
