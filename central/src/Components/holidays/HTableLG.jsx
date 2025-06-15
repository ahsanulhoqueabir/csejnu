import BasicH from "./BasicH";
import ComplexH from "./ComplexH";
import data from "../../assets/data/holidays24_25.json";
const HTableLG = () => {
  return (
    <table className="hidden md:block table border border-info-content text-xs lg:text-lg ">
      <thead className="">
        <tr className=" text-info-content border border-info-content divide-x-[1px] divide-info-content">
          <th>ক্লাস ছুটি</th>
          <th>দিন</th>
          <th>ছুটির উপলক্ষ</th>
          <th className="">অফিস ছুটি</th>
          <th className="">দিন</th>
        </tr>
      </thead>
      <tbody>
        {data?.holidays.map((day, index) => {
          if (!day.sliced) {
            return <BasicH key={index} data={day} />;
          } else {
            return <ComplexH key={index} data={day} />;
          }
        })}
        <tr className="border border-info-content divide-x-[1px] divide-info-content text-end">
          <td colSpan={2}>{data.total.class}</td>
          <td className="" colSpan={3}>
            {data.total.office}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HTableLG;
