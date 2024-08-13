import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_APIKEY_BACKEND_SERVER_API_BASE_URL,
});

const useAxiosPublic = () => {
  const navigate = useNavigate();
  const handleResErr = async (err) => {
    const status = err.response?.status;
    if (status === 401 || ((status === 403) === status) === 500) {
      navigate("/errorpage");
    }
    return Promise.reject(err);
  };
  axiosPublic.interceptors.response.use(
    (res) => res,
    // (err) => handleResErr(err)
    handleResErr
  );
  return axiosPublic;
};

export default useAxiosPublic;
