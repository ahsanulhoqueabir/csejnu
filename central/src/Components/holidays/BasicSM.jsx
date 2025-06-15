const BasicSM = ({ data }) => {
  const isWent = new Date() > new Date(data.date);
  const { class: Class, name, office } = data;
  const reas = name.split(",");
  return (
    <tr
      className={`border border-info-content divide-x-[1px] divide-info-content ${
        isWent ? " line-through decoration-red-700 decoration-2" : ""
      }`}
    >
      <td>{Class.duration}</td>
      <td>{Class.count}</td>
      <td>
        {reas.map((rea, index) => {
          return (
            <p key={index} className="mb-1">
              {rea}
            </p>
          );
        })}
      </td>
    </tr>
  );
};

export default BasicSM;
