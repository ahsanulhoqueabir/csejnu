import axios from "axios";
const Axios = axios.create({
  baseURL: import.meta.env.VITE_APIKEY_BACKEND_SERVER_API_BASE_URL,
});
const useAxios = () => {
  Axios.interceptors.response.use(
    (res) => res
    // (err) => handleResErr(err)
  );
  return Axios;
};

export default useAxios;
