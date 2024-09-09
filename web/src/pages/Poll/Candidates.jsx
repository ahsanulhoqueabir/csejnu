import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import LoadingPage from "../../pages/Shared/LoadingPage";
import ErrorPage from "../../pages/Shared/ErrorPage";
import Headline from "../../components/Headline";
import { getImage } from "../../utility/functions";
import GraphFM from "./Comp/GraphFM";
import GraphPer from "./Comp/GraphPer";

const Candidates = () => {
  const axiosPublic = useAxiosPublic();
  const [candidates, setCandidates] = useState([]);
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axiosPublic
      .get("/common/election-result?name=select-representative")
      .then((res) => {
        setCandidates(res.data);
        const data = res.data;
        const m = [],
          f = [];
        data.forEach((d) => {
          if (d.gender === "M") {
            m.push(d);
          }
          if (d.gender === "F") {
            f.push(d);
          }
        });
        const win = [];
        win.push(m[0], m[1], f[0], f[1]);
        setWinners(win);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div className="px-5 lg:px-16">
      <div>
        <Headline>Elected</Headline>
        <div className="grid gap-4">
          {winners.map((winner) => (
            <Winner key={winner.email} data={winner} />
          ))}
        </div>
      </div>
      <div>
        <Headline>Participated Candidates</Headline>

        <div className="h-60">
          <GraphFM data={candidates} />
        </div>
      </div>
    </div>
  );
};

export default Candidates;

const Winner = ({ data }) => {
  const { photo, name, gender, votes } = data;
  return (
    <div className="lg:flex gap-3 p-2 border rounded">
      <div className="w-full gap-2 flex lg:block">
        <img
          className="size-24 lg:size-48 object-cover rounded"
          src={
            photo
              ? photo
              : gender === "M"
              ? getImage("stocks", "studentM.jpeg")
              : getImage("stocks", "studentF.jpeg")
          }
          alt={name.fullName}
        />
        <div>
          <h1>{name.fullName}</h1>
          <p>{data?.email}</p>
          <p>{gender === "M" ? "Male" : "Female"}</p>
        </div>
      </div>
      <div className="py-5 ">
        <GraphPer votes={votes} />
      </div>
    </div>
  );
};
