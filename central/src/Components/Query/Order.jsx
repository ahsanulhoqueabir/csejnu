import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Order = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("asc");

  const options = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
    { value: "ran", label: "Random" },
  ];

  return (
    <div>
      {/* dropdown - btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border"
      >
        <h1 className="font-medium text-gray-600">
          {options.find((f) => f.value === selectedValue).label}
        </h1>

        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {/* dropdown - options  */}
      <div
        className={`${
          isOpen ? "visible top-0 opacity-100" : "invisible -top-4 opacity-0"
        } relative mx-auto  w-72 rounded-xl  border duration-300 bg-base-300 `}
      >
        {options?.map((option, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setSelectedValue(option.value);
              setIsOpen(false);
            }}
            className="px-6 py-2  hover:bg-info-content text-success"
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
  z;
};

export default Order;
