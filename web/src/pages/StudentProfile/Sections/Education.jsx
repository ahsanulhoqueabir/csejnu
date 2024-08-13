const Education = ({ education }) => {
  return (
    <div className="card-content mt-8">
      <div className="card-subtitle">EDUCATION TIMELINE</div>
      <div className="card-timeline">
        {education.map((data, index) => (
          <Level key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Education;

const Level = ({ data }) => {
  return (
    <div className="card-item" data-year={data.passingYear}>
      <div className="card-item-title">
        {data.level === "University"
          ? `CSE undergrad at`
          : `${data.level} from`}{" "}
        {data.institution}
      </div>
      <div className="card-item-desc">
        {data.level === "University" ? (
          `Studying Computer Science and Engineering at ${data.institution}`
        ) : (
          <p>
            <span>Completed {data.level} from </span>
            <span className="capitalize">{data.institution}</span>{" "}
            <span>in {data.background}.</span>
          </p>
        )}
      </div>
    </div>
  );
};
