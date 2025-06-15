import { useState } from "react";

const SelectBatch = () => {
  const [batches, setBatches] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setBatches((prevBatches) => [...prevBatches, value]);
    } else {
      setBatches((prevBatches) =>
        prevBatches.filter((batch) => batch !== value)
      );
    }
  };
  return (
    <div className="">
      <h1 className="lg:text-2xl pb-3">Select Batches</h1>
      <div className="space-y-2">
        {batchItems.map((batch) => (
          <label key={batch.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={batch.value}
              onChange={handleCheckboxChange}
              className="form-checkbox"
            />
            <span>{batch.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectBatch;

const batchItems = [
  {
    label: "14th Batch",
    value: "B220305",
  },
  {
    label: "13th Batch",
    value: "B210305",
  },
  {
    label: "12th Batch",
    value: "B200305",
  },
  {
    label: "11th Batch",
    value: "B190305",
  },
  {
    label: "10th Batch",
    value: "B180305",
  },
];
