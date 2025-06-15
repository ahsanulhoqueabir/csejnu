import { useState } from "react";

const SelectField = ({ setData, field }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);

    setData((prevData) => ({
      ...prevData,
      [field.name]: e.target.value,
    }));
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
        // required={field.isRequired}
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
              {option.level}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
