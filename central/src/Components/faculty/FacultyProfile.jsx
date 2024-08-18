import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";

const FacultyProfile = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, [id]);
  return <div></div>;
};

export default FacultyProfile;
