import { useNavigate } from "react-router-dom";
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_APIKEY_Backend_URL,
});

const useAxiosPublic = () => {
  const navigate = useNavigate();

  const handleResponseError = async (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403 || status === 500) {
      navigate("/error");
    }
    return Promise.reject(error);
  };

  axiosPublic.interceptors.response.use(
    (response) => response,
    handleResponseError
  );

  return axiosPublic;
};

export default useAxiosPublic;
