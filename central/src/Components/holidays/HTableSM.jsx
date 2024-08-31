import data from "../../assets/data/holidays24_25.json";
import BasicH from "./BasicH";
import BasicSM from "./BasicSM";
import ComplexH from "./ComplexH";
import ComplexSM from "./ComplexSM";

const HTableSM = () => {
  return (
    <table className="md:hidden table border border-info-content text-xs lg:text-lg ">
      <thead className="">
        <tr className=" text-info-content border border-info-content divide-x-[1px] divide-info-content">
          <th>ক্লাস ছুটি</th>
          <th>দিন</th>
          <th>ছুটির উপলক্ষ</th>
        </tr>
      </thead>
      <tbody>
        {data?.holidays.map((day, index) => {
          if (!day.sliced) {
            return <BasicSM key={index} data={day} />;
          } else {
            return <ComplexSM key={index} data={day} />;
          }
        })}
        <tr className="border border-info-content divide-x-[1px] divide-info-content text-end">
          <td colSpan={2} className="border-r-[1px] border-info-content">
            {data.total.class}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HTableSM;
