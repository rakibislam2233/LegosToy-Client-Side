import Lottie from "lottie-react";
import erorPage from "../../assets/Lotti/404 page.json";
const ErrorPage = () => {
  return (
    <div className="w-full h-screen  flex justify-center  ">
        
            <Lottie animationData={erorPage} loop={true} />
    </div>
  );
};

export default ErrorPage;
