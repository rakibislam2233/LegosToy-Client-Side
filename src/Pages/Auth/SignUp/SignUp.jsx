import Lottie from "lottie-react";
import login from "../../../assets/Lotti/Login.json";
import { BsGithub, BsGoogle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import {updateProfile } from "firebase/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { createNewUser,logOut,gitHubLogin,googleLogin} = useContext(UserContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const naviget = useNavigate()
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
    createNewUser(email, password)
      .then((result) => {
        const users = result.user;
        updateProfile(users,{
          displayName:name,
          photoURL:photoUrl
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Create New User Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        logOut()
        naviget("/login");
        form.reset();
      })
      .catch((err) => {
        setError(err.message)
      });

  };
  const LoginWithgoogle = () => {
    googleLogin()
    .then(result =>{
      const user = result.user;
      naviget("/");
  })
  .catch(err=>{
      setError(err.message)
  })
  };
  const LoginWithgitHub = () => {
   gitHubLogin()
    .then(result =>{
      const user = result.user;
      naviget("/");
  })
  .catch(err=>{
      setError(err.message)
  })
  };
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="w-full md:max-w-1/2 text-center lg:text-left">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="w-full md:max-w-1/2 card flex-shrink-0  max-w-sm  bg-base-100 py-5">
          <form onSubmit={handelSignUp} className="w-4/5 mx-auto relative">
            <h3 className="text-center text-2xl font-semibold">Sign Up</h3>
            {error && (
          <div className="my-2 border p-2 rounded border-rose-700">
              <h2 className="text-rose-700">{error}</h2>
          </div>
        )}
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
