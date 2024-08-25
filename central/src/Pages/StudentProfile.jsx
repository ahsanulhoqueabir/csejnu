import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/axios/useAxiosSecure";
import useAxiosPublic from "../Hooks/axios/useAxiosPublic";
import LoadingPage from "../Shared/LoadingPage";
import ErrorPage from "../Shared/ErrorPage";
import { useNavigate } from "react-router-dom";
import Personal from "../Components/studentProfile/Personal";
const StudentProfile = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (user && !authLoading) {
      axiosPublic
        .get(`/students/profile?email=${"lamiya755755@gmail.com"}`)
        .then((res) => {
          setData(res.data);
          //   console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          navigate("/page-not-found");
        });
    }
  }, [user]);
  if (loading || authLoading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  const { personal } = data;
  return (
    <div>
      <Personal personal={personal} />
    </div>
  );
};

export default StudentProfile;
