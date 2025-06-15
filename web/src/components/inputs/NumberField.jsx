const NumberField = ({ setData, field }) => {
  const handleChange = (event) => {
    if (field.name.includes("education")) {
      const curr = +field.name.split(".")[1];
      setData((prevData) => ({
        ...prevData,
        education: prevData.education.map((edu, index) => {
          if (index === curr) {
            return {
              ...edu,
              [field.name.split(".")[2]]: +event.target.value,
            };
          } else {
            return edu;
          }
        }),
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [field.name]: +event.target.value,
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
        // onChange={(event) => {
        //   setData((prevData) => ({
        //     ...prevData,
        //     [field.name]: +event.target.value,
        //   }));
        // }}
        onChange={handleChange}
        name={field.name}
        type="number"
        required={field.isRequired}
        placeholder={field.placeholder}
        className={`w-full placeholder:text-info-content text-info-content bg-base-300 px-4 py-3 rounded-md   focus:outline-none focus:bg-base-300`}
      />
    </div>
  );
};

export default NumberField;
