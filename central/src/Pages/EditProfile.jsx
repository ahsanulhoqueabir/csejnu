import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/axios/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import LoadingPage from "../Shared/LoadingPage";
import ErrorPage from "../Shared/ErrorPage";
import BreadCrumb from "../Components/common/BreadCrumb";
import Personal from "../Components/editProfile/Personal";

const EditProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/students/profile?email=${user?.email}`)
        .then((res) => {
          setUserInfo(res.data);
          // console.log(res.data);
          setData(res.data);
          setLoading(false);
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
  return (
    <>
      <BreadCrumb page={"Edit"} />
      <section>
        <Personal setData={setData} data={userInfo.personal} />
      </section>
    </>
  );
};

export default EditProfile;
