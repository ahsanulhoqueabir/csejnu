import { useState } from "react";

const SelectField = ({ setData, field }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
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
    } else {
      setData((prevData) => ({
        ...prevData,
        [field.name]: e.target.value,
      }));
    }
  };
  return (
    <div className="space-y-2 ">
      <label className=" font-philosopher text-xl font-medium">
        {field.label}
        {field.isRequired && <span className="text-red-500">*</span>}
      </label>
      <select
        onChange={handleChange}
        name={field.name}
        required={field.isRequired}
        value={value}
        className="w-full placeholder:text-info-content text-info-content bg-base-300 px-4 py-1 rounded-md   focus:outline-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        {field.options.map((option, index) => {
          return (
            <option key={index} className="bg-base-100" value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
