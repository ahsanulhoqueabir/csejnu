import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import Google from "./Google";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/axios/useAxios";
const managers = ["contact.ahsanul@gmail.com", "b210305040@cse.jnu.ac.bd"];
const SignIn = ({ setState }) => {
  const axiosPublic = useAxios();
  const navigate = useNavigate();
  const { email_login, setUser, logout } = useAuth();
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    email_login(email, password)
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
        toast.error(err.message);
        navigate("/");
      });
  };
  return (
    <div className="relative  flex flex-col sm:justify-center items-center  ">
      <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-secondary-content shadow-md">
          <label className="block mt-3  text-center text-3xl font-semibold font-philosopher">
            Login
          </label>
          <form onSubmit={onSubmit} className="mt-10">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 pl-3 block w-full border-none  h-11 rounded-xl shadow-lg   focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="mt-7">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="mt-1 pl-3 block w-full border-none  h-11 rounded-xl shadow-lg   focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="mt-7">
              <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>
          </form>
          <p className="mt-5">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setState(false);
              }}
              className="text-blue-500 cursor-pointer"
            >
              SignUp
            </span>
          </p>
          <Google />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
