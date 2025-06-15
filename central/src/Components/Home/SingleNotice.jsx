import { FaDownload, FaRegCalendarAlt } from "react-icons/fa";

const SingleNotice = ({ notice, index }) => {
  return (
    <div className="relative group border border-info-content rounded-lg hover:bg-base-200 duration-700 transition-colors ease-linear">
      <div
        style={{
          borderRadius: "30% 70% 75% 25% / 50% 24% 76% 50% ",
        }}
        className=" absolute size-12 bg-info-content text-secondary-content flex justify-center items-center -mt-[10px] -ml-[10px] rounded font-black text-2xl select-none group-hover:bg-accent-content group-hover:text-info-content group-hover:border group-hover:border-info-content transition-colors duration-700 ease-out "
      >
        {index + 1}
      </div>
      <div className="pt-12 pl-4 pb-6 space-y-2 flex-col ">
        <h1 className=" grow">📝 {notice.title}</h1>
        <div className="space-y-2 grow">
          <p className="flex gap-2 items-center">
            <FaRegCalendarAlt />
            {new Date(notice.date).toString().split(" ").slice(0, 4).join(" ")}
          </p>
          <button
            onClick={() => {
              window.open(notice.link);
            }}
            className="bg-secondary-content px-3 rounded-md text-info-content flex items-center gap-2 py-1 "
          >
            <FaDownload />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleNotice;

const PrevVersion = ({ notice }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#fff", position: "relative" }}>
        <iframe
          src={notice.link}
          className="w-full h-[600px] no-scrollbar bg-transparent"
        ></iframe>
      </div>
      <div className="pt-5 space-y-2">
        <h1 className=" h-full">📝 {notice.title}</h1>
        <p className="flex gap-2 items-center">
          <FaRegCalendarAlt />
          {new Date(notice.date).toString().split(" ").slice(0, 4).join(" ")}
        </p>
      </div>
    </div>
  );
};
