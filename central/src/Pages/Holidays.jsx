import data from "../assets/data/holidays24_25.json";
import BreadCrumb from "../Components/common/BreadCrumb";
import BasicH from "../Components/holidays/BasicH";
import ComplexH from "../Components/holidays/ComplexH";
const Holidays = () => {
  return (
    <>
      <BreadCrumb page={"Holidays"} />
      <section>
        <h1 className=" text-center py-5">{data.year}</h1>
        <div className=" overflow-x-auto">
          <table className="table border border-info-content text-xs lg:text-lg ">
            <thead>
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
        </div>
      </section>
    </>
  );
};

export default Holidays;
