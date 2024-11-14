const peopleArray = [
  { name: "abir", age: 20, gender: "male" },
  { name: "binod", age: 21, gender: "male" },
  { name: "carla", age: 22, gender: "female" },
  { name: "diana", age: 23, gender: "female" },
  { name: "emily", age: 24, gender: "female" },
  { name: "faisal", age: 25, gender: "male" },
  { name: "george", age: 26, gender: "male" },
  { name: "hannah", age: 27, gender: "female" },
  { name: "ian", age: 28, gender: "male" },
  { name: "julia", age: 29, gender: "female" },
  { name: "kyle", age: 30, gender: "male" },
  { name: "lara", age: 31, gender: "female" },
  { name: "mohit", age: 32, gender: "male" },
  { name: "nina", age: 33, gender: "female" },
  { name: "oscar", age: 34, gender: "male" },
  { name: "priya", age: 35, gender: "female" },
  { name: "quentin", age: 36, gender: "male" },
  { name: "riya", age: 37, gender: "female" },
  { name: "sam", age: 38, gender: "male" },
  { name: "tina", age: 39, gender: "female" },
];
const Graph = () => {
  return (
    <div className="flex gap-2 h-60">
      {peopleArray.map((person, index) => (
        <Item data={person} key={index} />
      ))}
    </div>
  );
};
export default Graph;

const Item = ({ data }) => {
  console.log(typeof data.age);
  return (
    <div className={`w-4 bg-teal-300 h-[${data.age * 5}px]`}>
      <p>{data.age}</p>
    </div>
  );
};
