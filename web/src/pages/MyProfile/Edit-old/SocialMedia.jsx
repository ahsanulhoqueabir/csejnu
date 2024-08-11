import { FaPlusCircle, FaSave } from "react-icons/fa";
import useSocial from "../../../hooks/EditProfile/useSocial";
import { useEffect, useState } from "react";
import { platforms } from "../../../Data/socialplatforms";
const SocialMedia = () => {
  const { social, included, setIncluded } = useSocial();
  const [newItems, setNewItems] = useState(0);
  const createNew = () => {
    let sma_new = newItems;
    sma_new++;
    setNewItems(sma_new);
  };

  return (
    <div>
      <div className="flex gap-4 items-start justify-start">
        <h1 className="text-lg lg:text-2xl font-extralight pb-4">
          Social Media Accounts
        </h1>
        <div>
          <FaPlusCircle
            onClick={createNew}
            className="text-xl cursor-pointer"
          />
        </div>
      </div>
      <div className=" space-y-3">
        {social?.map((item) => (
          <SMA item={item} />
        ))}
      </div>
      <div className="pt-3 space-y-3">
        {Array.from({ length: newItems }).map((item) => (
          <AddNew />
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;

const AddNew = () => {
  const { included, setIncluded } = useSocial();

  const reck = platforms.filter((item) => {
    if (!included.includes(item.value)) {
      return item;
    }
  });
  const [prev, setPrev] = useState("");
  const [Curr, setCurr] = useState(reck[0]);
  useEffect(() => {
    const inc = included;
    inc.pop();
    inc.push(Curr);
    setIncluded(inc);
  }, [Curr]);

  const handleNew = (e) => {
    e.preventDefault();
    const form = e.target;
    const platform = form.platform.value;
    const value = form.username.value;
    console.log(platform, value);
  };
  //   const updatingplateform = (e) => {
  //     const value = e.target.value;
  //     const curr = included;
  //     curr.push(value);
  //     setIncluded(curr);
  //     console.log(included);
  //   };
  return (
    <>
      <form
        onSubmit={handleNew}
        className="w-full flex justify-between items-center gap-5"
      >
        <select
          name="platform"
          //   onChange={updatingplateform}
          onChange={(e) => {
            setCurr(e.target.value);
          }}
          className="w-2/3 bg-teal-100 rounded focus:outline-none"
        >
          {reck.map((pl, ind) => (
            <option value={pl.value} key={ind}>
              {pl.name}
            </option>
          ))}
        </select>
        <input
          name="username"
          className="w-full bg-teal-100 focus:outline-none pl-2 rounded"
          type="text"
        />
        <button>
          <FaSave className="text-green-700 text-lg" />
        </button>
      </form>
    </>
  );
};

const SMA = ({ item }) => {
  const handleNew = (e) => {
    e.preventDefault();
    const form = e.target;
    const platform = form.platform.value;
    const value = form.username.value;
    console.log(platform, value);
  };

  return (
    <>
      <form
        onSubmit={handleNew}
        className="w-full flex justify-between items-center gap-5"
      >
        <select
          name="platform"
          className="w-2/3 bg-teal-100 rounded capitalize focus:outline-none "
        >
          <option defaultValue={item.platform}>{item.platform}</option>
        </select>
        <input
          name="username"
          defaultValue={item.username}
          className="w-full bg-teal-100 focus:outline-none pl-2 rounded"
          type="text"
        />
        <button>
          <FaSave className="text-green-700 text-lg" />
        </button>
      </form>
    </>
  );
};
