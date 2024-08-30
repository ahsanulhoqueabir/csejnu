const ComplexH = ({ data }) => {
  const { class: Class, name, office } = data;
  return (
    <>
      {name.map((item, idx) => {
        if (idx == 0) {
          return (
            <First
              key={idx}
              item={item}
              Class={Class}
              span={name.length}
              office={office[idx]}
              date={data.date}
            />
          );
        } else {
          {
            return (
              <Others
                date={data.date}
                key={idx}
                item={item}
                office={office[idx]}
              />
            );
          }
        }
      })}
    </>
  );
};

export default ComplexH;
const First = ({ item, Class, span, office, date }) => {
  const reas = item.split(",");
  const isWent = new Date() > new Date(date);

  return (
    <tr
      className={`border border-info-content divide-x-[1px] divide-info-content ${
        isWent ? " line-through decoration-red-700 decoration-2" : ""
      }`}
    >
      <td rowSpan={span}>{Class.duration}</td>
      <td rowSpan={span}>{Class.count}</td>
      <td>
        {reas.map((rea, index) => {
          return (
            <p key={index} className="mb-1">
              {rea}
            </p>
          );
        })}
      </td>
      <td>{office.duration}</td>
      <td>{office.count}</td>
    </tr>
  );
};
const Others = ({ item, office, date }) => {
  const reas = item.split(",");
  const isWent = new Date() > new Date(date);
  return (
    <tr
      className={`border border-info-content divide-x-[1px] divide-info-content ${
        isWent ? " line-through decoration-red-700 decoration-2" : ""
      }`}
    >
      <td className=" border-l-[1px] border-info-content">
        {reas.map((rea, index) => {
          return (
            <p key={index} className="mb-1">
              {rea}
            </p>
          );
        })}
      </td>
      <td>{office.duration}</td>
      <td>{office.count}</td>
    </tr>
  );
};
