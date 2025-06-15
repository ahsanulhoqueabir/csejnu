import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingPage from "../../pages/Shared/LoadingPage";
import ErrorPage from "../../pages/Shared/ErrorPage";
import Allowed from "./Allowed";
import NotAllowed from "./NotAllowed";
import Candidates from "./Candidates";
const PollPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [candidates, setCandidates] = useState();
  const [isVoted, setVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      axiosSecure
        .get(
          `/common/get-election?name=select-representative&email=${user.email}`
        )
        .then((res) => {
          if (res.status === 208) {
            setVoted(true);
            setLoading(false);
          } else {
            setCandidates(res.data.candidates);
            setLoading(false);
          }
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  const isCompleted = new Date() > new Date("2024-09-03T09:05:00");
  return (
    <>
      <Banner>Democracy Corner</Banner>
      {isCompleted ? (
        <Candidates />
      ) : isVoted ? (
        <NotAllowed />
      ) : (
        <Allowed setVoted={setVoted} user={user} candidates={candidates} />
      )}
    </>
  );
};

export default PollPage;
