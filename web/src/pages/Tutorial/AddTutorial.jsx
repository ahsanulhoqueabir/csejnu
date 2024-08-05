import React from "react";
import { toast } from "react-toastify";
import Banner from "../../components/Banner";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
const fields = [
  {
    type: "text",
    name: "topic",
    label: "Topic Name(Class relevant info)",
  },
  {
    type: "date",
    name: "date",
    label: "Class Date",
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
    type: "url",
    name: "classURL",
    label: "Paste Yt vedio URL",
  },
];
const AddTutorial = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {};
    for (let i = 0; i < form.length - 1; i++) {
      if (form[i].name) {
        data[form[i].name] = form[i].value;
      }
    }
    const classURL = form.classURL.value;
    let videoID = "";
    const pattern =
      /https?:\/\/(?:www\.)?youtu(?:be\.com\/(?:.*v(?:\/|=\/|=))|\.be\/)([A-Za-z0-9_\-]{11})/;
    if (classURL.match(pattern)) {
      [, videoID] = classURL.match(pattern);
      data.classURL = videoID;
      axiosSecure
        .post("/tutorial/add", {
          data,
        })
        .then((res) => res.json())
        .then((data) => {
          toast("Added Successfully");
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
      <div className="lg:w-1/2 mx-auto py-20 px-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {fields.map((field, ind) => {
            return field.type === "select" ? (
              <div key={ind} className="space-y-2">
                <label className="font-medium">{field.label}</label>
                <select
                  name={field.name}
                  className="w-full bg-neutral py-2 px-4 focus:outline-none"
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
              <div key={ind} className="space-y-2">
                <label className=" font-medium">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full placeholder:text-black  bg-neutral py-2 px-4 focus:outline-none"
                  placeholder={field.label}
                />
              </div>
            );
          })}
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorial;
