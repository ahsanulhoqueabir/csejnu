const ComplexSM = ({ data }) => {
  const { class: Class, name, office } = data;
  const isWent = new Date() > new Date(data.date);

  return (
    <tr
      className={`border border-info-content divide-x-[1px] divide-info-content ${
        isWent ? " line-through decoration-red-700 decoration-2" : ""
      }`}
    >
      <td>{Class.duration}</td>
      <td>{Class.count}</td>
      <td>
        {name.map((rea, index) => {
          if (rea.includes(",")) {
            return rea.split(",").map((r, i) => {
              return (
                <p key={i} className="mb-1">
                  {r}
                </p>
              );
            });
          } else {
            return (
              <p key={index} className="mb-1">
                {rea}
              </p>
            );
          }
        })}
      </td>
    </tr>
  );
};

export default ComplexSM;
