import { useState } from "react";
import SignIn from "../Components/Login/SignIn";
import SignUp from "../Components/Login/SignUp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="px-5 lg:py-10">
      {isLogin ? (
        <SignIn setState={setIsLogin} />
      ) : (
        <SignUp setState={setIsLogin} />
      )}
    </div>
  );
};

export default Login;
