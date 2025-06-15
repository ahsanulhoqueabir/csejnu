import { useState } from "react";
import Banner from "../../components/Banner";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import TextField from "../../components/inputs/TextField";
import SelectField from "../../components/inputs/SelectField";
import DateField from "../../components/inputs/DateField";
import TimeField from "../../components/inputs/TimeField";
import { toast } from "react-toastify";

const NewExam = () => {
  const [data, setData] = useState();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosSecure
      .post("/routine/add-exam-to-calender", data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        toast("Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast("Failed to add");
      });
  };
  return (
    <>
      <Banner>Add New Exam</Banner>
      <section className="px-5 py-8 lg:px-20">
        <form onSubmit={onSubmit}>
          <div className="grid lg:grid-cols-2 gap-4">
            {fields.map((field, index) => {
              if (field.type === "text") {
                return (
                  <TextField key={index} field={field} setData={setData} />
                );
              }
              if (field.type === "select") {
                return (
                  <SelectField key={index} field={field} setData={setData} />
                );
              }
              if (field.type === "date") {
                return (
                  <DateField key={index} field={field} setData={setData} />
                );
              }
              if (field.type === "time") {
                return (
                  <TimeField key={index} field={field} setData={setData} />
                );
              }
            })}
          </div>
          <div className="pt-6">
            <button className="bg-teal-300 text-black hover:bg-teal-500 transition-colors duration-500 ease-in-out py-[6px] rounded-md text-center mx-auto w-full">
              {loading ? (
                <span className="loading py-0 loading-dots loading-md"></span>
              ) : (
                <span> Add Exam</span>
              )}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewExam;

const fields = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter a title for this Exam",
    label: "Title for this Exam",
    isRequired: true,
  },
  {
    name: "course",
    type: "select",
    placeholder: "Select a course",
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
    label: "Select Course",
    isRequired: true,
  },
  {
    name: "date",
    type: "date",
    placeholder: "Enter date",
    label: "Date",
    isRequired: true,
  },
  {
    name: "time",
    type: "time",
    placeholder: "Enter time",
    label: "Time",
    isRequired: true,
  },
];
