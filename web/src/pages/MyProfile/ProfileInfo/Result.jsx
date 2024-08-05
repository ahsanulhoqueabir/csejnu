import { useState } from "react";
import SemesterResult from "./SemesterResult";
import GetIcon from "../../../utility/icons";
import { getSemester } from "../../../utility/functions";

const Result = ({ results }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    code: "Choose One",
    full: "Choose One",
    index: 0,
  });
  const options = results.map((re, index) => {
    const code = re.semester;
    const full = getSemester(code);
    return {
      code,
      full,
      index,
    };
  });
  return (
    <div>
      <div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`mx-auto flex w-72 items-center justify-between rounded-xl bg-secondary-content px-6 py-2 ${
            isOpen ? "" : "mb-7"
          } border`}
        >
          <h1 className="font-medium text-info-content">
            {selectedValue.full}
          </h1>
          {!isOpen ? (
            <GetIcon
              className={"text-info-content"}
              icon={`FaAngleDown`}
              lib={"fa"}
            />
          ) : (
            <GetIcon
              className={"text-info-content"}
              icon={"FaAngleUp"}
              lib={"fa"}
            />
          )}
        </div>
        {isOpen && (
          <div
            className={` relative mx-auto py-1 w-72 rounded-xl duration-300 mb-3 `}
          >
            {options?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue(option);
                  setIsOpen(false);
                }}
                className="px-6 py-2 text-info-content hover:bg-secondary-content cursor-pointer rounded-md border-[1px] mb-[4px] select-none"
              >
                {option.full}
              </div>
            ))}
          </div>
        )}
      </div>
      <SemesterResult data={results[selectedValue.index]} />
    </div>
  );
};

export default Result;
