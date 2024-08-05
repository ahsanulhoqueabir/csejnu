import Lottie from "lottie-react";
import React, { useState } from "react";
import anim from "../../assets/notes-anim.json";
import Swal from "sweetalert2";
import Banner from "../../components/Banner";
import Headline from "../../components/Headline";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingPage from "../Shared/LoadingPage";

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

const AddNotes = () => {
  const axiosSecure = useAxiosSecure();
  const { loading: authLoading, user } = useAuth();
  const [loading, setLoading] = useState(false);

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
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axiosSecure
          .post(`/notes/add?email=${user?.email}`, data)
          .then((res) => {
            toast.success("Successfully Added");
            form.reset();
            setLoading(false);
          })
          .catch((err) => {
            toast.error("Something went wrong");
            setLoading(false);
          });
      }
    });
  };
  if (authLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Banner>
        <Headline>Add Your Notes</Headline>
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
            {fields.map((field) => {
              return field.type === "select" ? (
                <div className="space-y-2">
                  <label className="font-medium">{field.label}</label>
                  <select
                    name={field.name}
                    className="w-full py-2 px-4 focus:outline-none bg-secondary-content rounded"
                  >
                    <option selected disabled hidden>
                      {field.label}
                    </option>
                    {field.options.map((option) => {
                      return (
                        <option className="bg-base-100" value={option.value}>
                          {option.placeholder}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className=" font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full placeholder:text-black   py-2 px-4 focus:outline-none bg-secondary-content rounded"
                    placeholder={field.label}
                  />
                </div>
              );
            })}
            <button className="btn bg-info-content text-secondary-content hover:bg-transparent hover:text-info-content transition-colors duration-1000 ease-in-out mt-5 hover:border-info-content">
              {loading ? <Load /> : <span>Submit</span>}
            </button>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNotes;

const Load = () => {
  return (
    <div className=" h-5 w-5  border-secondary-content animate-spin rounded-full border-8 lg:border-8 border-dashed"></div>
  );
};
