import { FaCircleNotch, FaRegCheckCircle } from "react-icons/fa";

const Timeline = ({ academics }) => {
  return (
    <div>
      <ul className="timeline timeline-compact timeline-vertical pt-6">
        {academics?.map((data, index) => (
          <EachPhase
            key={index}
            index={index}
            length={academics.length}
            data={data}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;

const EachPhase = ({ data, index, length }) => {
  const thisYear = new Date().getFullYear();
  return (
    <li className="w-full">
      <hr className="bg-info-content" />
      <div className="timeline-middle">
        {data.passingYear > thisYear ? (
          <FaCircleNotch className=" animate-spin text-red-600 text-xl" />
        ) : (
          <FaRegCheckCircle className="text-teal-600 text-xl" />
        )}
        {/* <FaRegCheckCircle className="text-teal-600 text-xl" /> */}
      </div>
      <div className="timeline-end timeline-box space-y-1 w-[95%] lg:w-[80%] border-info-content hover:bg-secondary-content transition-colors duration-500 ease-in-out ">
        <h1 className="text-lg font-bold">
          {data.major || `${data.level} (${data.background})`}
        </h1>
        <h4 className="capitalize font-medium">{data.institution} </h4>
        <p className="pt-2 font-medium">
          {data.passingYear} - {data.startYear}
        </p>
      </div>
      {index !== length - 1 && <hr className="bg-info-content " />}
    </li>
  );
};
