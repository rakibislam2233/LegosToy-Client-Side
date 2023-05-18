import Lottie from "lottie-react";
import login from "../../../assets/Lotti/Login.json";
import { BsGithub, BsGoogle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const handelSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    setError("");
    console.log(name, email, photoUrl, password);
    if(name==''){
      return setError("Please enter a your name")
    }
    else if(email==''){
     return setError("Please enter a your email");
    }else if(password.length==0){
      return setError("Please enter a your password")
    }
    else if(password.length<6){
      return setError("Password minimum six characters")
    }
    return
    createUser(email, password)
      .then((result) => {
        const users = result.user;
        updateUserInfo(users, name, photoUrl);
        toast.success("Your Register Successfully");
        naviget("/login");
        logOut()
        form.reset();
      })
      .catch((err) => {
        setError(err.message)
      });

  };
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
          <form onSubmit={handelSignUp} className="w-4/5 mx-auto relative">
            <h3 className="text-center text-2xl font-semibold">Sign Up</h3>
            <div className="form-control">
              <label className="label">
                <span className="">Name</span>
              </label>
              <div className="">
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
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
            <div className="form-control">
              <label className="label">
                <span className="">Photo Url</span>
              </label>
              <input
                className="w-full py-2  px-3  border rounded-full"
                type="url"
                name="photoUrl"
                placeholder="Enter Your Photo URL"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="">Password</span>
              </label>
              <input
                className="w-full py-2  px-3  border rounded-full"
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="absolute top-[330px] right-5 cursor-pointer">
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <BsEyeFill></BsEyeFill>
                ) : (
                  <BsEyeSlashFill></BsEyeSlashFill>
                )}
              </span>
            </div>
            <button className="bg-[#742BFD] w-full text-white text-sm uppercase rounded-full  px-6 py-3 mt-2">
             Sign Up
            </button>
            <div className="text-center  py-2">
              <h2>
               Already You have an accoutn?Please {" "}
                <Link className="text-[#02214D]" to="/login">
                 Login
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

export default SignUp;
