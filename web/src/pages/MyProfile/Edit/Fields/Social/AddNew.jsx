import SMCP from "../../../../../utility/iconname";

const AddNew = ({ prev }) => {
  const platforms = SMCP;
  const AllPlat = [];
  const current = [];
  const p = Object.keys(platforms).map((item) => {
    return AllPlat.push(platforms[item]);
  });
  const filterd = AllPlat.filter(
    (item) => !prev.includes(item.name.toLowerCase())
  );
  // console.log(filterd);
  console.log(prev);

  return <div>hi</div>;
};

export default AddNew;
