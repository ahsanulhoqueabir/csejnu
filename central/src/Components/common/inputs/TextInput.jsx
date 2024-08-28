const TextInput = ({ setData, field, prev }) => {
  console.log(prev);
  const handleChange = () => {};
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
        defaultValue={prev || ""}
        required={field.isRequired}
        placeholder={field.placeholder}
        className={`w-full placeholder:text-info-content text-info-content bg-base-300 px-4 py-3 rounded-md   focus:outline-none focus:bg-base-300`}
      />
    </div>
  );
};

export default TextInput;
