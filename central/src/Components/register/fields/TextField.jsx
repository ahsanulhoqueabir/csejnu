import { useState } from "react";

const TextField = ({ setData, field }) => {
  const handleChange = (e) => {
    if (field.name.includes("education")) {
      const curr = +field.name.split(".")[1];
      setData((prevData) => ({
        ...prevData,
        education: prevData.education.map((edu, index) => {
          if (index === curr) {
            return {
              ...edu,
              [field.name.split(".")[2]]: e.target.value,
            };
          } else {
            return edu;
          }
        }),
      }));
    } else if (field.name.includes("profiles.social")) {
      setData((prevData) => ({
        ...prevData,
        [field.name]: {
          username: e.target.value,
          platform: field.label.toLowerCase(),
        },
      }));
    } else if (field.name.includes("profiles.coding")) {
      setData((prevData) => ({
        ...prevData,
        [field.name]: {
          username: e.target.value,
          platform: field.label.toLowerCase(),
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [field.name]: e.target.value,
      }));
    }
  };
  return (
    <div className={`space-y-2 text-sm`}>
      <label className=" font-medium font-philosopher text-xl">
        {field.label}
        {field.isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={handleChange}
        name={field.name}
        type="text"
        required={field.isRequired}
        placeholder={field.placeholder}
        className={`w-full placeholder:text-info-content text-info-content bg-base-300 px-4 py-3 rounded-md   focus:outline-none focus:bg-base-300`}
      />
    </div>
  );
};

export default TextField;
