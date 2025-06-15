import RoutineAccordion from "./RoutineAccordion";

const Day = ({ data }) => {
  return (
    <div className="bg-base-300 text-info-content relative rounded-lg">
      <p
        style={{ writingMode: "vertical-rl" }}
        className="text-[25px] absolute font-bold  rotate-180 pb-6 lg:px-2 text-center capitalize  bg-secondary text-white h-full font-philosopher"
      >
        {data.day}
      </p>
      <RoutineAccordion batches={data.batches} />
    </div>
  );
};

export default Day;
