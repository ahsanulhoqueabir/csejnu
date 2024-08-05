import Lottie from "lottie-react";
import React, { useContext, useEffect, useState } from "react";
import anim from "../../assets/notes-anim.json";
import { authContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import Banner from "../../components/Banner";
import Headline from "../../components/Headline";
import { useParams } from "react-router-dom";
import LoadingPage from "../Shared/LoadingPage";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import useAxiosPublic from "../../hooks/axios/useAxiosSecure";

const fields = [
  // {
  //   type: "text",
  //   name: "author",
  //   label: "Author Name",
  // },
  {
    type: "text",
    name: "title",
    label: "Note Title",
  },
  {
    type: "select",
    name: "code",
    label: "Course Name",
    options: [
      {
        placeholder: "Digital Logic Design",
        value: "CC2103",
      },
      {
        placeholder: "Digital Logic Design Lab",
        value: "CC2104",
      },
      {
        placeholder: "Introduction to Statistic and Probability",
        value: "CC2106",
      },
      {
        placeholder: "Data Communication Lab",
        value: "CC2108",
      },
      {
        placeholder: "Object Oriented Programming-II",
        value: "CC2101",
      },
      {
        placeholder: "Math- III (Ordinary differential Equation)",
        value: "CC2105",
      },
      {
        placeholder: "Object Oriented Programming-II Lab",
        value: "CC2102",
      },
      {
        placeholder: "Data Communication",
        value: "CC2107",
      },
      {
        placeholder: "Financial and Managerial Accounting",
        value: "CC2109",
      },
    ],
  },
  {
    type: "text",
    name: "topic",
    label: "Topic Name",
  },
  {
    type: "url",
    name: "link",
    label: "Notes URL",
  },
];
const UpdateNotes = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [loader, setLoading] = useState(true);
  const [loading, setloading] = useState(false);
  const [currentNote, setCurrentNote] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axiosSecure.get(`/notes?_id=${id}`).then((res) => {
      setCurrentNote(res.data.data[0]);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {};
    for (let i = 0; i < form.length - 1; i++) {
      if (form[i].name) {
        data[form[i].name] = form[i].value;
      }
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setloading(true);
        axiosSecure
          .put(`/notes/update?id=${id}`, data)
          .then((res) => {
            toast.success("Successfully Updated");
            form.reset();
            setloading(false);
          })
          .catch((err) => {
            toast.error("Something went wrong");
            setloading(false);
          });
      }
    });
  };
  if (loader) {
    return <LoadingPage />;
  }

  return (
    <>
      <Banner>
        <Headline>Update Note</Headline>
      </Banner>
      <div className=" flex flex-col lg:flex-row gap-10 items-center  py-16 px-6 lg:px-20">
        <div className="w-full hidden md:flex">
          <Lottie className="h-96" animationData={anim}></Lottie>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 text-info-content"
          >
            {fields.map((field, index) => {
              return field.type === "select" ? (
                <div key={index} className="space-y-2">
                  <label className="font-medium">{field.label}</label>
                  <select
                    name={field.name}
                    defaultValue={currentNote[field.name]}
                    className="w-full bg-secondary-content rounded py-2 px-4 focus:outline-none"
                  >
                    <option selected disabled hidden>
                      {field.label}
                    </option>
                    {field.options.map((option) => {
                      return (
                        <option className="" value={option.value}>
                          {option.placeholder}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : (
                <div key={index} className="space-y-2">
                  <label className=" font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    defaultValue={currentNote[field.name]}
                    className="w-full bg-secondary-content    py-2 px-4 focus:outline-none rounded"
                    placeholder={field.label}
                  />
                </div>
              );
            })}
            <button className="btn bg-info-content text-secondary-content hover:bg-transparent hover:text-info-content transition-colors duration-1000 ease-in-out mt-5 hover:border-info-content">
              {loading ? <Load /> : <span>Submit</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateNotes;

const Load = () => {
  return (
    <div className=" h-5 w-5  border-secondary-content animate-spin rounded-full border-8 lg:border-8 border-dashed"></div>
  );
};
