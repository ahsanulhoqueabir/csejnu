import data from "../assets/data/holidays24_25.json";
import BreadCrumb from "../Components/common/BreadCrumb";
import HTableLG from "../Components/holidays/HTableLG";
import HTableSM from "../Components/holidays/HTableSM";
const Holidays = () => {
  return (
    <>
      <BreadCrumb page={"Holidays"} />
      <section>
        <h1 className=" text-center py-5">{data.year}</h1>
        <div className=" overflow-x-auto">
          <HTableSM />
          <HTableLG />
        </div>
      </section>
    </>
  );
};

export default Holidays;
