const Skills = () => {
  return (
    <div>
      <h1 className="text-3xl pb-5 uppercase">SKILLs</h1>
      <div className=" space-y-2">
        {skillset.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
      <hr className=" border-gray-400 w-3/4  mt-7" />{" "}
    </div>
  );
};

export default Skills;

const Skill = ({ skill }) => {
  return (
    <div className="flex  pr-3 lg:pr-10 items-center">
      <p className="w-44">{skill.skill}</p>
      <div data-tip={`${skill.value}%`} className="tooltip w-full">
        <progress
          className="progress progress-success  w-full"
          value={skill.value}
          max="100"
        >
          {skill.value}%
        </progress>
      </div>
    </div>
  );
};

const skillset = [
  {
    skill: "Microsoft Word",
    value: 95,
  },
  {
    skill: "Microsoft Excel",
    value: 45,
  },
  {
    skill: "Microsoft PowerPoint",
    value: 80,
  },
  {
    skill: "Leadership",
    value: 80,
  },
  {
    skill: "Team Work",
    value: 75,
  },
  {
    skill: "Integrity",
    value: 95,
  },
  {
    skill: "Loyalty",
    value: 100,
  },
];
