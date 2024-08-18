import React, { useState } from "react";
import { getImage } from "../../utilities/functions";

const Accordion = ({ classes, batch }) => {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  //   console.log(classes);
  return (
    <div className="w-full text-info-content  rounded-lg p-3 lg:pl-8 ">
      {classes.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-info-content py-3 last-of-type:border-b-0"
        >
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium  outline-none"
          >
            <div className="flex items-center gap-2">
              <img
                className="size-4"
                src={getImage("icon", "week.svg")}
                alt=""
              />
              <span className="capitalize font-philosopher text-base lg:text-2xl">
                {item.day}
              </span>
            </div>
            <span className="rounded-full p-2">
              <svg
                className="ml-8 size-3 shrink-0 fill-info-content"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden  transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              <Slot periods={item.periods || []} batch={batch} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

const Slot = ({ periods, batch }) => {
  return (
    <div className="overflow-hidden ">
      <div
        className={`grid lg:grid-cols-2 gap-4 pt-5 pb-6 pr-4 pl-4 lg:pl-14 md:pl-16 border-l-[3px] text-sm lg:text-lg border-green-500  `}
      >
        {periods.length ? (
          <>
            {periods.map((item, idx) => (
              <div
                key={idx}
                className="bg-base-100 text-info-content  p-5 py-2 space-y-1 rounded"
              >
                <p>
                  <strong>Time: </strong> {item.start} - {item.end} (
                  {item.span * 30} minutes )
                </p>
                <p>
                  <b>Course: </b>
                  {item.course.CourseTitle}
                </p>
                <p>
                  <b>Teacher: </b>
                  {
                    item.course?.instructor[batch]?.teacher?.personal.name
                      .fullName
                  }{" "}
                  <b>
                    (
                    {
                      item.course?.instructor[batch]?.teacher?.personal.name
                        .accronym
                    }
                    )
                  </b>
                </p>
                <p>
                  <b>Classroom: </b>
                  {item.room}
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            <p>Off day</p>
          </>
        )}
      </div>
    </div>
  );
};
