const Languages = () => {
  const percentage = 60;
  return (
    <div className="py-10">
      <h1 className="text-3xl pb-5">Language I Know</h1>
      <div className="space-y-2">
        {languages.map((item, index) => (
          <Language key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Languages;
const Language = ({ item }) => {
  return (
    <div className="flex items-center pr-3 lg:pr-10">
      <p className="w-44">{item.name}</p>
      <div data-tip={`${item.value}%`} className="tooltip w-full">
        <progress
          className="progress progress-success  w-full"
          value={item.value}
          max="100"
        >
          {item.value}%
        </progress>
      </div>
    </div>
  );
};

const languages = [
  {
    name: "C",
    value: 72,
  },
  {
    name: "C++",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 85,
  },
  {
    name: "React",
    value: 45,
  },
  {
    name: "MongoDB",
    value: 85,
  },
  {
    name: "Express",
    value: 85,
  },
  {
    name: "Node",
    value: 60,
  },
];
