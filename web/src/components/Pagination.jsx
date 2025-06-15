import { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, pageCount }) => {
  const updatePageNumber = (num) => {
    if (num > pageCount || 1 > num) {
      return onPageChange(1);
    }
    onPageChange(num);
  };
  const pageArray = [...Array(pageCount + 1).keys()].slice(1);

  return (
    <div className="flex select-none justify-center items-center gap-3 py-10">
      {/* left arrow */}
      <div
        onClick={() => {
          updatePageNumber(currentPage - 1);
        }}
        className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full"
      >
        <svg
          className="w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15 7L10 12L15 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>
        </svg>
      </div>
      <div className="flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full">
        {pageArray.map((item, ind) => (
          <div
            onClick={() => {
              onPageChange(item);
            }}
            className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${
              currentPage === item ? "bg-sky-500 text-white" : "bg-white"
            } border-sky-300  font-semibold text-gray-700   py-[6px] rounded-full`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      {/* right arrow */}
      <div
        onClick={() => {
          updatePageNumber(currentPage + 1);
        }}
        className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full"
      >
        <svg
          className="w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10 7L15 12L10 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
