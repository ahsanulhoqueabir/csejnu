import { useState } from "react";
import Personal from "../Components/register/Personal";
import Education from "../Components/register/Education";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import { toast } from "react-toastify";
import SocialMedia from "../Components/register/SocialMedia";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState({
    batch: "B220305",
    department: "66b88999bfc8b7b111d40a9e",
    education: [
      {
        level: "University",
        institution: "Jagannath University",
        major: "Computer Science & Engineering",
        background: "Science",
        startYear: 2022,
        passingYear: 2026,
      },
      {
        level: "college",
        major: "Science",
        background: "Science",
      },
      {
        level: "school",
        major: "Science",
        background: "Science",
      },
    ],
  });
  const handleForm = (e) => {
    e.preventDefault();
    console.log(data);
    axiosPublic
      .post("/auth/addnew", data)
      .then((res) => {
        toast("Thank you.");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleForm}>
      <Personal setData={setData} />
      <Education setData={setData} />
      <SocialMedia setData={setData} />
      <div className="mx-auto flex justify-center pt-10">
        <button
          className="py-2 px-5 bg-base-200 transition-colors duration-700 ease-in-out hover:bg-neutral hover:text-white rounded w-full "
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
