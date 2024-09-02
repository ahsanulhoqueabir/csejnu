import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";

const Allowed = ({ user, candidates, setVoted }) => {
  const [selected, setSelected] = useState([]);
  const axiosSecure = useAxiosSecure();

  const handleChange = (e) => {
    const value = e.target.value;
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (selected.length === 4) {
      const m = [],
        f = [];
      selected.map((item) => {
        const opt = candidates.find((cand) => {
          return cand.user._id === item;
        });
        if (opt.user.personal.gender === "M") {
          m.push(opt.name);
        } else {
          f.push(opt.name);
        }
      });
      if (m.length === f.length) {
        axiosSecure
          .put("/common/do-vote", {
            email: user?.email,
            selected,
            name: "select-representative",
          })
          .then((res) => {
            setVoted(true);
            toast.success(res?.data.message);
          })
          .catch((err) => {
            toast.error(err.response?.data.message);
          });
      } else {
        toast.error("Please,Select equal number of Male & Female Candidates.");
      }
    } else if (selected.length < 4) {
      toast.error("Please select 4 candidates");
    } else if (selected.length > 4) {
      toast.error("Please select only 4 candidates");
    }
  };
  return (
    <section className="py-10 px-5 lg:px-20">
      <h1 className="text-xl lg:text-3xl font-philosopher pb-2">
        Choose your top 4 candidates to represent your opinion to counseil-
      </h1>
      <form onSubmit={onsubmit}>
        <div className="space-y-4 pt-5">
          {candidates.map((candidate) => (
            <div className="" key={candidate.user._id}>
              <input
                className="hidden peer"
                onChange={handleChange}
                type="checkbox"
                name="counseil"
                id={candidate.user._id}
                value={candidate.user._id}
              />
              <label
                className="flex items-center gap-2 text-xl peer-checked:bg-teal-400 peer-checked:text-white rounded h-12  pl-5 bg-teal-100"
                htmlFor={candidate.user._id}
              >
                <span>{candidate.user.personal.name.fullName}</span>
              </label>
            </div>
          ))}
        </div>

        <button className="px-4 w-full py-1 bg-teal-300 rounded-md mt-6 mx-auto ">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Allowed;
