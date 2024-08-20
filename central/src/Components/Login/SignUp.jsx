import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Google from "./Google";
import { toast } from "react-toastify";

const SignUp = ({ setState }) => {
  const navigate = useNavigate();
  const { email_signup, setUser, logout } = useAuth();
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    email_signup(email, password)
      .then((res) => {
        setUser(res.user);
        toast("User Created Successfully");
        logout();
        navigate("/");
      })
      .catch((err) => {
        toast(err.message);
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
            SignUp
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
                SignUp
              </button>
            </div>
          </form>
          <p className="mt-5">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState(true);
              }}
              className="text-blue-500 cursor-pointer"
            >
              Login
            </span>
          </p>
          <Google />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
