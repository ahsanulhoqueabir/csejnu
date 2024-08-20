import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_APIKEY_BACKEND_SERVER_API_BASE_URL,
});
const useAxiosSecure = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        // await logout();
        navigate("/not-authorized");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
