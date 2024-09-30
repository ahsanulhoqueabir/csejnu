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
import SelectField from "../../components/inputs/SelectField";
import TextField from "../../components/inputs/TextField";
import NoteField from "../../components/inputs/NoteField";

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
    placeholder: "Note Title",
    isRequired: true,
  },
  {
    type: "select",
    name: "code",
    label: "Course Name",
    isRequired: true,
    options: [
      {
        level: "Digital Logic Design",
        value: "CC2103",
      },
      {
        level: "Digital Logic Design Lab",
        value: "CC2104",
      },
      {
        level: "Introduction to Statistic and Probability",
        value: "CC2106",
      },
      {
        level: "Data Communication Lab",
        value: "CC2108",
      },
      {
        level: "Object Oriented Programming-II",
        value: "CC2101",
      },
      {
        level: "Math- III (Ordinary differential Equation)",
        value: "CC2105",
      },
      {
        level: "Object Oriented Programming-II Lab",
        value: "CC2102",
      },
      {
        level: "Data Communication",
        value: "CC2107",
      },
      {
        level: "Financial and Managerial Accounting",
        value: "CC2109",
      },
    ],
  },
  {
    type: "text",
    name: "topic",
    label: "Topic Name",
    placeholder: "Topic Name",
    isRequired: true,
  },
  {
    type: "file",
    name: "link",
    label:
      "(Once you select,it will go through uploading process. So,select carefully!)",
    placeholder: "Select File",
    isRequired: true,
  },
];

const AddNotes = () => {
  const [data, setData] = useState();
  const [files, setFiles] = useState(null);
  const [folderName, setFolderName] = useState("csejnu");
  const axiosSecure = useAxiosSecure();
  const { loading: authLoading, user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmitt = (e) => {
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
  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", files);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

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
              if (field.type === "select") {
                return <SelectField setData={setData} field={field} />;
              }
              if (field.type === "text") {
                return <TextField setData={setData} field={field} />;
              }
              if (field.type === "file") {
                return <NoteField setData={setData} field={field} />;
              }
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
