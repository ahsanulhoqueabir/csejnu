import React, { useState } from "react";
import { toast } from "react-toastify";
import Banner from "../../components/Banner";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import TextField from "../../components/inputs/TextField";
import DateField from "../../components/inputs/DateField";
import SelectField from "../../components/inputs/SelectField";
import LinkField from "../../components/inputs/LinkField";
const fields = [
  {
    type: "text",
    name: "topic",
    label: "Topic Name(Class relevant info)",
    placeholder: "Enter Topic Name",
    isRequired: true,
  },
  {
    type: "date",
    name: "date",
    label: "Class Date",
    isRequired: true,
  },
  {
    type: "select",
    name: "course",
    label: "Course Name",
    isRequired: true,
    placeholder: "Select Course",
    options: [
      {
        level: "Object Oriented Programming II",
        value: "6634a58a5a3dd1c63764d661",
      },
      {
        level: "Introduction to Statistic and Probability",
        value: "6634a58a5a3dd1c63764d666",
      },
      {
        level: "Math III (Ordinary differential Equation)",
        value: "6634a58a5a3dd1c63764d662",
      },
      {
        level: "Digital Logic Design",
        value: "6634a58a5a3dd1c63764d660",
      },
      {
        level: "Digital Logic Design Lab",
        value: "6634a58a5a3dd1c63764d665",
      },
      {
        level: "Data Communication Lab",
        value: "6634a58a5a3dd1c63764d65e",
      },
      {
        level: "Object Oriented Programming II Lab",
        value: "6634a58a5a3dd1c63764d663",
      },
      {
        level: "Data Communication",
        value: "6634a58a5a3dd1c63764d664",
      },
      {
        level: "Financial and Managerial Accounting",
        value: "6634a58a5a3dd1c63764d65f",
      },
    ],
  },
  {
    type: "url",
    name: "classURL",
    label: "Paste Yt vedio URL",
    placeholder: "Paste Yt vedio URL",
    isRequired: true,
  },
];
const AddTutorial = () => {
  const [data, setData] = useState();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const classURL = form.classURL.value;
    let videoID = "";
    const pattern =
      /https?:\/\/(?:www\.)?youtu(?:be\.com\/(?:.*v(?:\/|=\/|=))|\.be\/)([A-Za-z0-9_\-]{11})/;
    if (classURL.match(pattern)) {
      [, videoID] = classURL.match(pattern);
      data.classURL = videoID;
      axiosSecure
        .post("/tutorial/add", data)
        .then((data) => {
          toast("Added Successfully");
          form.reset();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast({
        type: "error",
        message: "Please enter a valid youtube URL",
      });
      return false;
    }
  };
  return (
    <div className="min-h-screen">
      <Banner>Add Tutorial</Banner>
      <div className="lg:px-24 mx-auto py-20 px-5">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-5">
            {fields.map((field, ind) => {
              if (field.type === "text") {
                return <TextField key={ind} setData={setData} field={field} />;
              }
              if (field.type === "date") {
                return <DateField key={ind} setData={setData} field={field} />;
              }
              if (field.type === "select") {
                return (
                  <SelectField key={ind} setData={setData} field={field} />
                );
              }
              if (field.type === "url") {
                return <LinkField key={ind} setData={setData} field={field} />;
              }
            })}
          </div>
          <div className="w-full pt-10">
            <button className="btn w-full text-xl font-playwrite">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
