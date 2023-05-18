import Lottie from "lottie-react";
import login from "../../../assets/Lotti/Login.json";
import { BsGithub, BsGoogle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const handelSingIn = () => {};
  const LoginWithgoogle = () => {};
  const LoginWithgitHub = () => {};
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="w-full md:max-w-1/2 text-center lg:text-left">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="w-full md:max-w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 py-5">
        {error && (
          <div className="alert alert-error shadow-lg my-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2>{error}</h2>
            </div>
          </div>
        )}
          <form onSubmit={handelSingIn} className="w-4/5 mx-auto relative">
          <h3 className="text-center text-2xl font-semibold">Login</h3>
            <div className="form-control">
              <label className="label">
                <span className="text-xl">Email</span>
              </label>
              <div className="">
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="text-xl">Password</span>
              </label>
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
            </div>
            <div className="absolute top-[175px] right-5 cursor-pointer">
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <BsEyeFill></BsEyeFill>
                ) : (
                  <BsEyeSlashFill></BsEyeSlashFill>
                )}
              </span>
            </div>
            <button className="bg-[#742BFD] w-full text-white text-sm uppercase rounded-full  px-6 py-3 my-4">
              Login
            </button>
            <div className="text-center  py-2">
              <h2>
                Do not have an accoutn? Please{" "}
                <Link className="text-[#02214D]" to="/signUp">
                  Create an account
                </Link>{" "}
              </h2>
            </div>
            <div className="text-center flex justify-center items-center gap-3">
              <div className="w-full h-0.5 bg-slate-600"></div>
              <h2 className="font-semibold">or</h2>
              <div className="w-full h-0.5  bg-slate-600"></div>
            </div>
            <div className="flex gap-5 justify-center">
              <div onClick={LoginWithgoogle}>
                <BsGoogle className="w-6 h-6 cursor-pointer"></BsGoogle>
              </div>
              <div onClick={LoginWithgitHub}>
                <BsGithub className="w-6 h-6 cursor-pointer"></BsGithub>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
