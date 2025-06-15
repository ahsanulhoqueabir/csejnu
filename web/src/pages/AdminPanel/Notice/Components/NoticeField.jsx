import React from "react";
import Headline from "../../../../components/Headline";
const fields = [
  {
    type: "text",
    name: "title",
    placeholder: "Enter the title",
    label: "Enter the title",
  },
  {
    type: "select",
    name: "courseTeacher",
    placeholder: "Select the course teacher",
    label: "Select the course teacher",
    options: [
      "Nayeema Islam",
      "Shahnaz Parvin",
      "Dr. Omor Faruk",
      "Prof. Dr. Md. Nasir Uddin",
      "Dr. Sajeeb Saha",
      "Md. Ashraful Islam",
      "Tanvir Ahammad",
    ],
  },
  {
    type: "select",
    name: "course",
    placeholder: "Select the course",
    label: "Select the course",
    options: [
      "Data Communication Lab",
      "Introduction to Statistic and Probability",
      "Financial and Managerial Accounting",
      "Digital Logic Design",
      "Object Oriented Programming-II",
      "Math- III (Ordinary differential Equation)",
      "Object Oriented Programming-II Lab",
      "Data Communication",
      "Digital Logic Design Lab",
      "Other",
    ],
  },
  {
    type: "date",
    name: "date",
    placeholder: "Enter the date",
    label: "Select the date",
  },
  {
    type: "time",
    name: "time",
    placeholder: "Enter the time",
    label: "Select the time",
  },
  {
    type: "select",
    name: "room",
    placeholder: "Select the room",
    label: "Select the room",
    options: [
      "SW Lab-1: Software Lab-1 (5th Floor)",
      "SW Lab-2: Software Lab-2 (6th Floor)",
      "Room-721",
      "Hardware Lab: 5th Floor",
      "Room-601",
      "Room-712",
      "VC Room",
      "Other",
    ],
  },
  {
    type: "text",
    name: "description",
    placeholder: "Write the description",
    label:
      "Write the description. Each fullstop will be considered as a new line.",
  },
  {
    type: "text",
    name: "tag",
    placeholder: "Write the tag",
    label: "Write  tags separated by commas(At most 3)",
  },
];
const NoticeField = ({ itemNo, setNoticeData, noticeData }) => {
  const handleNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let name of formData.keys()) {
      data[name] = formData.get(name);
    }
    const dsc = data.description.split(".");
    if (!dsc[dsc.length - 1]) {
      dsc.pop();
    }
    const tags = data.tag.split(",");
    if (!tags[tags.length - 1]) {
      tags.pop();
    }
    data.description = dsc;
    data.tag = tags;
    // form.reset();
    const modify = new Date(`${data.date} ${data.time}`).toJSON();
    data.date = modify;
    let prev = noticeData;
    prev[itemNo - 1] = data;
    console.log((prev[itemNo - 1] = data));
    setNoticeData([...prev]);
  };

  return (
    <div className="w-full ">
      <Headline>Notice Number - {itemNo}</Headline>
      <form onSubmit={handleNotice} className="">
        <div className="grid grid-cols-1  gap-3">
          {fields.map((field, index) => {
            return field.type === "select" ? (
              <div
                key={field.name}
                data-aos="zoom-in-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="space-y-2 "
              >
                <label className="font-medium" htmlFor={field.name}>
                  {field.label}
                </label>
                <select
                  key={index}
                  required
                  name={field.name}
                  className="w-full placeholder:text-black bg-neutral py-2 px-4 focus:outline-none"
                >
                  <option value={field.label} disabled>
                    {field.label}
                  </option>
                  {field.options.map((option, index) => (
                    <option className="bg-base-100" key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div
                key={field.name}
                data-aos="zoom-in-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className={`space-y-2 text-sm ${
                  field.type === "textarea" && "lg:col-span-2"
                }`}
              >
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  required
                  key={index}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`w-full text-base-100 bg-neutral placeholder:text-black px-4 py-3 rounded-md border border-indigo-300 focus:outline-none ${
                    field.type === "textarea" && "min-h-24 col-span-2 p-2"
                  }`}
                />
              </div>
            );
          })}
        </div>
        <button className="btn my-5 w-full">ADD</button>
      </form>
    </div>
  );
};

export default NoticeField;
