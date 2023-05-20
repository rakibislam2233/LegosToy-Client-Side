import Lottie from "lottie-react";
import erorPage from "../../assets/Lotti/404 not found.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="w-full h-[88vh] flex justify-center flex-col items-center">
          <div className="w-full">
          <Lottie className="w-full  max-w-[600px] mx-auto h-full" animationData={erorPage} loop={true} />
          </div>
          <div className="flex w-full h-full justify-center items-center"> 
            <Link to='/'><button className="py-2 px-5 bg-gray-900 rounded-full text-white font-semibold">Back to Home</button></Link>
          </div>
    </div>
  );
};

export default ErrorPage;
