import Lottie from "lottie-react";
import LoginLotti from "../../../assets/Lotti/Login.json";
import { BsGithub, BsGoogle} from "react-icons/bs";
import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
const Login = () => {
  const [error, setError] = useState(null);
  const {login,googleLogin,gitHubLogin} = useContext(UserContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const location = useLocation();
const naviget = useNavigate();
const from = location?.state?.from.pathname || "/";
  const handelSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if (email == "") {
      return setError("Please enter your email");
    } else if (password.length == 0) {
      return setError("Please enter your password");
    }
    login(email, password)
    .then((result) => {
      const users = result.user;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      setError("");
      naviget(from, { replace: true });
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
      naviget(from, { replace: true })
  })
  .catch(err=>{
      setError(err.message)
  })
  };
  const LoginWithgitHub = () => {
   gitHubLogin()
    .then(result =>{
      const user = result.user;
      naviget(from, { replace: true })
  })
  .catch(err=>{
      setError(err.message)
  })
  };
  return (
    <div className="hero min-h-screen bg-base-200 pt-20">
      <Helmet>
        <title>LegoLandmark|Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="w-full md:max-w-1/2 text-center lg:text-left">
          <Lottie animationData={LoginLotti} loop={true} />
        </div>
        <div className="w-full md:max-w-1/2 card flex-shrink-0  max-w-sm  bg-base-100 py-5">
          <form onSubmit={handelSingIn} className="w-4/5 mx-auto relative">
          <h3 className="text-center text-2xl font-semibold">Login</h3>
          {error && (
          <div className="border p-2 rounded border-rose-700 my-2">
              <h2 className="text-rose-700">{error}</h2>
          </div>
        )}
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
            <div className="form-control">
              <label className="label">
                <span className="text-xl">Password</span>
              </label>
                <input
                  className="w-full py-2  px-3  border rounded-full"
                  type='password'
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
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
