import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/axios/useAxios";
const Google = () => {
  const axiosPublic = useAxios();
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        axiosPublic
          .get(`/auth/login?email=${res.user.email}`)
          .then((resp) => {
            toast(`Welcome back ${resp.data.data.name}`);
            setUser(res.user);
            navigate("/");
          })
          .catch((err) => {
            toast.error("You are not authorized to login");
            logout();
            navigate("/");
          });
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  };
  return (
    <div>
      <div className="flex mt-7 items-center text-center">
        <hr className="border-gray-300 border-1 w-full rounded-md" />
        <label className="block font-medium text-sm  w-full">
          Sign in with{" "}
        </label>
        <hr className="border-gray-300 border-1 w-full rounded-md" />
      </div>

      <div className="flex mt-7 justify-center w-full">
        {/* <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button> */}

        <button
          onClick={handleGoogle}
          className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default Google;
